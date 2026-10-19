import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/stores/languageStore';
import { useNavigate } from 'react-router-dom';
import {
  adminApi,
} from '@/services/api';
import type {
  AdminOverview,
  AdminUserStats,
  AdminUserDetail,
  UserFeedbackItem,
  JLPTLevel,
} from '@/types';
import {
  Users,
  MessageSquare,
  BarChart3,
  Search,
  CheckCircle,
  Clock,
  Trash2,
  X,
  RefreshCw,
  Flame,
  Award,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Filter,
  ShieldCheck,
  ShieldAlert,
  ShieldPlus,
  AlertCircle,
  TrendingUp,
  Activity,
  PieChart,
} from 'lucide-react';

export const AdminDashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'feedbacks'>('overview');

  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [users, setUsers] = useState<AdminUserStats[]>([]);
  const [feedbacks, setFeedbacks] = useState<UserFeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // User search & filters
  const [userSearch, setUserSearch] = useState('');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('all');
  const [selectedUserDetail, setSelectedUserDetail] = useState<AdminUserDetail | null>(null);
  const [loadingUserDetail, setLoadingUserDetail] = useState(false);

  // Add Admin modal state
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);
  const [adminModalTab, setAdminModalTab] = useState<'promote' | 'create'>('promote');
  const [selectedPromoteUserId, setSelectedPromoteUserId] = useState<number | ''>('');
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminName, setNewAdminName] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [adminSubmitting, setAdminSubmitting] = useState(false);
  const [adminActionError, setAdminActionError] = useState<string | null>(null);

  // Hovered activity index for weekly chart tooltip
  const [hoveredDayIndex, setHoveredDayIndex] = useState<number | null>(null);

  // Feedback filters
  const [feedbackStatusFilter, setFeedbackStatusFilter] = useState<'ALL' | 'PENDING' | 'REVIEWED' | 'RESOLVED'>('ALL');
  const [feedbackCategoryFilter, setFeedbackCategoryFilter] = useState<string>('ALL');

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const loadAllData = async () => {
    try {
      const [ovRes, uRes, fbRes] = await Promise.all([
        adminApi.getOverview(),
        adminApi.getUsers(),
        adminApi.getFeedbacks(),
      ]);
      setOverview(ovRes.data);
      setUsers(uRes.data);
      setFeedbacks(fbRes.data);
    } catch (err) {
      console.error('Failed to load admin data', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    loadAllData();
  };

  const handleOpenUserDetail = async (userId: number) => {
    setLoadingUserDetail(true);
    try {
      const res = await adminApi.getUserDetail(userId);
      setSelectedUserDetail(res.data);
    } catch (err) {
      console.error('Failed to load user detail', err);
      triggerToast(language === 'my' ? 'အသုံးပြုသူ အသေးစိတ်ကို တင်ယူ၍မရပါ' : language === 'en' ? 'Failed to load user details.' : 'Gagal memuat detail pengguna.');
    } finally {
      setLoadingUserDetail(false);
    }
  };

  const handleUpdateRole = async (userId: number, newRole: 'ADMIN' | 'USER', userName: string) => {
    try {
      await adminApi.updateUserRole(userId, newRole);
      setUsers((prev) => prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u)));
      if (selectedUserDetail && selectedUserDetail.userStats.id === userId) {
        setSelectedUserDetail({
          ...selectedUserDetail,
          userStats: { ...selectedUserDetail.userStats, role: newRole },
        });
      }
      if (newRole === 'ADMIN') {
        triggerToast((t.admin as any).addAdmin?.promoteSuccess?.(userName) || `Berhasil mengangkat ${userName} sebagai Admin!`);
      } else {
        triggerToast((t.admin as any).addAdmin?.demoteSuccess?.(userName) || `Role ${userName} dikembalikan ke Pengguna Biasa.`);
      }
    } catch (err: any) {
      console.error('Failed to update role', err);
      triggerToast(err?.message || (language === 'my' ? 'အက်ဒမင် အခွင့်အရေး ပြောင်းလဲ၍မရပါ' : language === 'en' ? 'Failed to update admin role.' : 'Gagal mengubah hak akses admin.'));
    }
  };

  const handlePromoteExisting = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPromoteUserId) return;
    const targetUser = users.find((u) => u.id === Number(selectedPromoteUserId));
    if (!targetUser) return;

    setAdminSubmitting(true);
    setAdminActionError(null);
    try {
      await adminApi.updateUserRole(targetUser.id, 'ADMIN');
      setUsers((prev) => prev.map((u) => (u.id === targetUser.id ? { ...u, role: 'ADMIN' } : u)));
      setShowAddAdminModal(false);
      setSelectedPromoteUserId('');
      triggerToast((t.admin as any).addAdmin?.promoteSuccess?.(targetUser.displayName) || `Berhasil mengangkat ${targetUser.displayName} sebagai Admin!`);
    } catch (err: any) {
      setAdminActionError(err?.message || (language === 'my' ? 'အသုံးပြုသူကို အက်ဒမင်အဖြစ် မြှင့်တင်၍မရပါ' : language === 'en' ? 'Failed to promote user to admin.' : 'Gagal mengangkat pengguna menjadi admin.'));
    } finally {
      setAdminSubmitting(false);
    }
  };

  const handleCreateNewAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminEmail.trim()) {
      setAdminActionError(language === 'my' ? 'အီးမေးလ် သို့မဟုတ် အသုံးပြုသူအမည် ထည့်သွင်းရန် လိုအပ်သည်' : language === 'en' ? 'Email or username is required.' : 'Email atau username wajib diisi.');
      return;
    }
    if (newAdminPassword.trim().length < 6) {
      setAdminActionError(language === 'my' ? 'စကားဝှက်သည် အနည်းဆုံး ၆ လုံး ရှိရမည်' : language === 'en' ? 'Password must be at least 6 characters.' : 'Password minimal 6 karakter.');
      return;
    }

    setAdminSubmitting(true);
    setAdminActionError(null);
    try {
      const res = await adminApi.createOrPromoteAdmin({
        email: newAdminEmail.trim(),
        name: newAdminName.trim() || undefined,
        password: newAdminPassword.trim(),
      });
      await loadAllData();
      setShowAddAdminModal(false);
      setNewAdminEmail('');
      setNewAdminName('');
      setNewAdminPassword('');
      triggerToast((t.admin as any).addAdmin?.createSuccess?.(res.data.displayName || newAdminEmail.trim()) || `Akun admin baru ${res.data.displayName} berhasil dibuat!`);
    } catch (err: any) {
      setAdminActionError(err?.message || (language === 'my' ? 'အက်ဒမင်အကောင့်သစ် ဖန်တီး၍မရပါ' : language === 'en' ? 'Failed to create new admin account.' : 'Gagal membuat akun admin baru.'));
    } finally {
      setAdminSubmitting(false);
    }
  };

  const handleUpdateFeedbackStatus = async (
    id: number,
    newStatus: 'PENDING' | 'REVIEWED' | 'RESOLVED'
  ) => {
    try {
      await adminApi.updateFeedbackStatus(id, newStatus);
      setFeedbacks((prev) =>
        prev.map((f) => (f.id === id ? { ...f, status: newStatus } : f))
      );
      if (overview) {
        setOverview({
          ...overview,
          pendingFeedbacks:
            newStatus === 'PENDING'
              ? overview.pendingFeedbacks + 1
              : Math.max(0, overview.pendingFeedbacks - 1),
        });
      }
      triggerToast(language === 'my' ? `တုံ့ပြန်ချက် #${id} ၏ အခြေအနေ ပြင်ဆင်ပြီးပါပြီ` : language === 'en' ? `Feedback #${id} status updated.` : `Status feedback #${id} diperbarui.`);
    } catch (err) {
      console.error('Failed to update feedback status', err);
      triggerToast(language === 'my' ? 'တုံ့ပြန်ချက် အခြေအနေကို ပြင်ဆင်၍မရပါ' : language === 'en' ? 'Failed to update feedback status.' : 'Gagal memperbarui status feedback.');
    }
  };

  const handleDeleteFeedback = async (id: number) => {
    if (!confirm(t.admin.feedbackTab.deletePrompt)) return;
    try {
      await adminApi.deleteFeedback(id);
      setFeedbacks((prev) => prev.filter((f) => f.id !== id));
      if (overview) {
        setOverview({
          ...overview,
          totalFeedbacks: Math.max(0, overview.totalFeedbacks - 1),
        });
      }
      triggerToast(t.admin.feedbackTab.toastDeleted);
    } catch (err) {
      console.error('Failed to delete feedback', err);
      triggerToast(language === 'my' ? 'တုံ့ပြန်ချက်ကို ဖျက်၍မရပါ' : language === 'en' ? 'Failed to delete feedback.' : 'Gagal menghapus feedback.');
    }
  };

  // Filtered Users
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.displayName.toLowerCase().includes(userSearch.toLowerCase()) ||
      u.email.toLowerCase().includes(userSearch.toLowerCase());
    const matchesLevel =
      selectedLevelFilter === 'all' || u.currentLevel === selectedLevelFilter;
    return matchesSearch && matchesLevel;
  });

  // Filtered Feedbacks
  const filteredFeedbacks = feedbacks.filter((f) => {
    const matchesStatus =
      feedbackStatusFilter === 'ALL' || f.status === feedbackStatusFilter;
    const matchesCategory =
      feedbackCategoryFilter === 'ALL' || f.category === feedbackCategoryFilter;
    return matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
            {t.admin.feedbackTab.statusPending}
          </span>
        );
      case 'REVIEWED':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
            {t.admin.feedbackTab.statusReviewed}
          </span>
        );
      case 'RESOLVED':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            {t.admin.feedbackTab.statusResolved}
          </span>
        );
      default:
        return null;
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'qna':
        return t.admin.feedbackTab.catQna;
      case 'audio':
        return t.admin.feedbackTab.catAudio;
      case 'layout':
        return t.admin.feedbackTab.catLayout;
      case 'feature':
        return t.admin.feedbackTab.catFeature;
      default:
        return t.admin.feedbackTab.catOther;
    }
  };

  // Helper calculation for Level Distribution Bar Chart
  const levelMaxCount = overview
    ? Math.max(...Object.values(overview.levelDistribution), 1)
    : 1;

  // Level bar color mappings
  const levelBarGradients: Record<string, { bar: string; badge: string; text: string }> = {
    N5: {
      bar: 'from-emerald-500 to-teal-400',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800',
      text: 'text-emerald-600 dark:text-emerald-400',
    },
    N4: {
      bar: 'from-teal-500 to-cyan-500',
      badge: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800',
      text: 'text-teal-600 dark:text-teal-400',
    },
    N3: {
      bar: 'from-sky-500 to-indigo-500',
      badge: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800',
      text: 'text-sky-600 dark:text-sky-400',
    },
    N2: {
      bar: 'from-indigo-600 to-violet-500',
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800',
      text: 'text-indigo-600 dark:text-indigo-400',
    },
    N1: {
      bar: 'from-purple-600 to-pink-500',
      badge: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800',
      text: 'text-purple-600 dark:text-purple-400',
    },
  };

  // Helper calculation for Weekly Activity Area Chart
  const weeklyData = overview?.weeklyActivity || [];
  const maxWeeklyCards = Math.max(...weeklyData.map((d) => d.cardsStudied), 10);
  const totalWeeklyCards = weeklyData.reduce((acc, cur) => acc + cur.cardsStudied, 0);
  const avgDailyCards = Math.round(totalWeeklyCards / Math.max(weeklyData.length, 1));

  // Compute SVG Points for Weekly Line & Area Chart
  const svgWidth = 540;
  const svgHeight = 130;
  const paddingX = 35;
  const paddingY = 20;
  const usableWidth = svgWidth - paddingX * 2;
  const usableHeight = svgHeight - paddingY * 2;

  const chartPoints = weeklyData.map((d, idx) => {
    const x = paddingX + (idx / Math.max(weeklyData.length - 1, 1)) * usableWidth;
    const y = paddingY + usableHeight - (d.cardsStudied / maxWeeklyCards) * usableHeight;
    return { x, y, data: d };
  });

  // Construct smooth bezier curve path
  const curvePath = chartPoints.reduce((acc, p, idx, arr) => {
    if (idx === 0) return `M ${p.x} ${p.y}`;
    const prev = arr[idx - 1]!;
    const cpX = (prev.x + p.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${p.y}, ${p.x} ${p.y}`;
  }, '');

  const firstPt = chartPoints[0];
  const lastPt = chartPoints[chartPoints.length - 1];
  const areaPath = firstPt && lastPt
    ? `${curvePath} L ${lastPt.x} ${svgHeight - paddingY} L ${firstPt.x} ${svgHeight - paddingY} Z`
    : '';

  // Donut Gauge math
  const globalAccuracy = overview?.globalAccuracy || 90;
  const donutRadius = 45;
  const donutCircumference = 2 * Math.PI * donutRadius;
  const donutStrokeDashoffset = donutCircumference - (globalAccuracy / 100) * donutCircumference;

  // Platform SRS counts
  const totalSrsCount = Math.max(
    (overview?.totalMasteredWords || 0) +
    (overview?.srsDistribution?.REVIEW || 0) +
    (overview?.srsDistribution?.LEARNING || 0),
    1
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-4">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-70 bg-stone-900/90 text-white dark:bg-white dark:text-stone-950 px-4 py-2.5 rounded-xl text-xs font-semibold shadow-2xl flex items-center space-x-2 animate-slide-up backdrop-blur-sm border border-stone-800/30">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-[#EFEAE2] dark:border-[#232F46]">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate('/')}
            className="w-8 h-8 rounded-xl bg-white dark:bg-[#151D2E] border border-[#EFEAE2] dark:border-[#232F46] flex items-center justify-center text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer shadow-xs"
            title={t.common.homeTooltip}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-lg font-bold font-mincho text-stone-900 dark:text-white flex items-center space-x-2">
              <span>{t.admin.title}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-800">
                PRO-MASTER
              </span>
            </h1>
            <p className="text-xs text-stone-500 dark:text-zinc-400">
              {t.admin.subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="p-2 rounded-xl bg-white dark:bg-[#151D2E] border border-[#EFEAE2] dark:border-[#232F46] text-stone-600 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer shadow-xs"
          title={t.admin.refresh}
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-indigo-600' : ''}`} />
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex bg-[#EFEAE2] dark:bg-[#151D2E] p-1 rounded-xl">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-white dark:bg-[#1E293B] text-stone-900 dark:text-white shadow-xs'
              : 'text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>{t.admin.tabs.overview}</span>
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
            activeTab === 'users'
              ? 'bg-white dark:bg-[#1E293B] text-stone-900 dark:text-white shadow-xs'
              : 'text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>{t.admin.tabs.users(users.length)}</span>
        </button>
        <button
          onClick={() => setActiveTab('feedbacks')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center space-x-1.5 cursor-pointer ${
            activeTab === 'feedbacks'
              ? 'bg-white dark:bg-[#1E293B] text-stone-900 dark:text-white shadow-xs'
              : 'text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t.admin.tabs.feedbacks(feedbacks.length)}</span>
          {overview && overview.pendingFeedbacks > 0 && (
            <span className="w-2 h-2 rounded-full bg-amber-500 ml-1 animate-pulse" />
          )}
        </button>
      </div>

      {/* TAB 1: OVERVIEW ANALYTICS & CHARTS */}
      {activeTab === 'overview' && overview && (
        <div className="space-y-4">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3.5 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs">
              <span className="text-[11px] font-semibold text-stone-400 dark:text-zinc-500 block">
                {t.admin.kpi.totalUsers}
              </span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="text-xl font-extrabold text-stone-900 dark:text-white">
                  {overview.totalUsers}
                </span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  {overview.activeLearners} aktif
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs">
              <span className="text-[11px] font-semibold text-stone-400 dark:text-zinc-500 block">
                {t.admin.kpi.studySessions}
              </span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="text-xl font-extrabold text-stone-900 dark:text-white">
                  {overview.totalStudySessions}
                </span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold">
                  sesi
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs">
              <span className="text-[11px] font-semibold text-stone-400 dark:text-zinc-500 block">
                {(t.admin.kpi as any).cardsStudiedTitle || 'Kartu Dipelajari'}
              </span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {overview.totalCardsStudied}
                </span>
                <span className="text-[10px] text-stone-500 dark:text-zinc-400 font-semibold">
                  kartu
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs">
              <span className="text-[11px] font-semibold text-stone-400 dark:text-zinc-500 block">
                {t.admin.kpi.masteredWords}
              </span>
              <div className="flex items-baseline space-x-1.5 mt-1">
                <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  {overview.totalMasteredWords}
                </span>
                <span className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 font-semibold">
                  kata
                </span>
              </div>
            </div>
          </div>

          {/* CHART 1: Interactive JLPT Level Distribution Bar Chart */}
          <div className="p-4 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-stone-100 dark:border-[#232F46]">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xs font-bold text-stone-900 dark:text-white font-mincho">
                  {t.admin.levelDistribution}
                </h3>
              </div>
              <span className="text-[10px] text-stone-400 dark:text-zinc-500 hidden sm:inline">
                {(t.admin as any).charts?.barClickHint || 'Klik bar untuk memfilter daftar pengguna'}
              </span>
            </div>

            {/* Visual Bar Columns */}
            <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 px-2 bg-stone-50/60 dark:bg-[#101623] rounded-xl border border-stone-200/50 dark:border-[#232F46]/60">
              {['N5', 'N4', 'N3', 'N2', 'N1'].map((lvl) => {
                const count = overview.levelDistribution[lvl] || 0;
                const percentage =
                  overview.totalUsers > 0
                    ? Math.round((count / overview.totalUsers) * 100)
                    : 0;
                const barHeightPercent = Math.max(14, Math.round((count / levelMaxCount) * 88));
                const colors = levelBarGradients[lvl] ?? levelBarGradients['N2']!;

                return (
                  <div
                    key={lvl}
                    onClick={() => {
                      setSelectedLevelFilter(lvl);
                      setActiveTab('users');
                    }}
                    className="flex-1 flex flex-col items-center h-full justify-end cursor-pointer group"
                    title={(t.admin as any).charts?.filterLevelTooltip ? (t.admin as any).charts.filterLevelTooltip(lvl, count) : `Klik untuk melihat pengguna ${lvl} (${count} pengguna)`}
                  >
                    {/* Top Stat Card / Tooltip */}
                    <div className="mb-1.5 flex flex-col items-center transition-transform group-hover:-translate-y-1">
                      <span className="text-xs font-extrabold text-stone-900 dark:text-white leading-none">
                        {count}
                      </span>
                      <span className={`text-[9px] font-semibold px-1 py-0.2 rounded mt-0.5 border ${colors.badge}`}>
                        {percentage}%
                      </span>
                    </div>

                    {/* Gradient Bar */}
                    <div className="w-full max-w-[42px] bg-stone-200/60 dark:bg-[#1C2538] rounded-t-xl overflow-hidden flex items-end h-full">
                      <div
                        style={{ height: `${barHeightPercent}%` }}
                        className={`w-full bg-gradient-to-t ${colors.bar} rounded-t-xl transition-all duration-500 group-hover:brightness-110 shadow-xs`}
                      />
                    </div>

                    {/* Bottom Level Label */}
                    <span className="text-xs font-extrabold text-stone-700 dark:text-zinc-300 font-jp mt-1.5 group-hover:text-indigo-600 transition-colors">
                      {lvl}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CHART 2: 7-Day Study Activity Trend Area Chart */}
          <div className="p-4 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1 border-b border-stone-100 dark:border-[#232F46]">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h3 className="text-xs font-bold text-stone-900 dark:text-white font-mincho">
                    {(t.admin as any).charts?.weeklyActivityTitle || 'Tren Aktivitas Belajar 7 Hari Terakhir'}
                  </h3>
                  <p className="text-[10px] text-stone-400 dark:text-zinc-500">
                    {(t.admin as any).charts?.weeklyActivitySubtitle || 'Volume kartu yang dipelajari dan frekuensi sesi per hari'}
                  </p>
                </div>
              </div>

              {/* Summary Pills */}
              <div className="flex items-center space-x-2 text-[10px]">
                <div className="px-2 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/70 dark:border-indigo-800">
                  Avg: {avgDailyCards} krt/hr
                </div>
                <div className="px-2 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200/70 dark:border-emerald-800">
                  Peak: {maxWeeklyCards} krt
                </div>
              </div>
            </div>

            {/* SVG Area Chart */}
            <div className="relative bg-stone-50/60 dark:bg-[#101623] rounded-xl p-3 border border-stone-200/50 dark:border-[#232F46]/60">
              <svg
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full h-36 overflow-visible"
              >
                <defs>
                  <linearGradient id="indigoAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Guide Lines */}
                <line
                  x1={paddingX}
                  y1={paddingY}
                  x2={svgWidth - paddingX}
                  y2={paddingY}
                  stroke="currentColor"
                  className="text-stone-200 dark:text-zinc-800"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <line
                  x1={paddingX}
                  y1={paddingY + usableHeight / 2}
                  x2={svgWidth - paddingX}
                  y2={paddingY + usableHeight / 2}
                  stroke="currentColor"
                  className="text-stone-200 dark:text-zinc-800"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <line
                  x1={paddingX}
                  y1={svgHeight - paddingY}
                  x2={svgWidth - paddingX}
                  y2={svgHeight - paddingY}
                  stroke="currentColor"
                  className="text-stone-300 dark:text-zinc-700"
                  strokeWidth="1"
                />

                {/* Shaded Area Under Curve */}
                {areaPath && (
                  <path d={areaPath} fill="url(#indigoAreaGrad)" />
                )}

                {/* Spline Stroke Line */}
                {curvePath && (
                  <path
                    d={curvePath}
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="dark:stroke-indigo-400"
                  />
                )}

                {/* Data Point Circles */}
                {chartPoints.map((p, idx) => {
                  const isHovered = hoveredDayIndex === idx;
                  return (
                    <g key={idx}>
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={isHovered ? 6 : 4}
                        fill="#FFFFFF"
                        stroke="#4F46E5"
                        strokeWidth="2.5"
                        className="cursor-pointer transition-all dark:fill-[#0F172A] dark:stroke-indigo-400"
                        onMouseEnter={() => setHoveredDayIndex(idx)}
                        onMouseLeave={() => setHoveredDayIndex(null)}
                      />
                      {/* Tooltip on Hover */}
                      {isHovered && (
                        <g>
                          <rect
                            x={Math.min(Math.max(p.x - 35, 10), svgWidth - 80)}
                            y={Math.max(p.y - 34, 4)}
                            width="70"
                            height="24"
                            rx="6"
                            fill="#0F172A"
                            className="shadow-lg"
                          />
                          <text
                            x={Math.min(Math.max(p.x, 45), svgWidth - 45)}
                            y={Math.max(p.y - 18, 20)}
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="10"
                            fontWeight="bold"
                          >
                            {p.data.cardsStudied} kartu
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* X-Axis Labels */}
              <div className="flex justify-between px-3 pt-1 text-[10px] text-stone-500 dark:text-zinc-400 font-semibold">
                {weeklyData.map((d, idx) => (
                  <div
                    key={idx}
                    className={`text-center cursor-pointer transition-colors ${
                      hoveredDayIndex === idx ? 'text-indigo-600 dark:text-indigo-400 font-bold' : ''
                    }`}
                    onMouseEnter={() => setHoveredDayIndex(idx)}
                    onMouseLeave={() => setHoveredDayIndex(null)}
                  >
                    <span className="block font-medium">{d.dayLabel}</span>
                    <span className="block text-[9px] opacity-70">{d.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CHART 3: SRS Retention Donut & Platform Accuracy Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Donut Gauge: Global Accuracy */}
            <div className="p-4 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs space-y-3 flex flex-col justify-between">
              <div className="flex items-center space-x-2 pb-1 border-b border-stone-100 dark:border-[#232F46]">
                <PieChart className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xs font-bold text-stone-900 dark:text-white font-mincho">
                  {(t.admin as any).charts?.globalAccuracyLabel || 'Akurasi Global'}
                </h3>
              </div>

              {/* Circular Gauge */}
              <div className="flex items-center justify-center py-2">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r={donutRadius}
                      className="text-stone-100 dark:text-zinc-800"
                      strokeWidth="11"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={donutRadius}
                      className="text-indigo-600 dark:text-indigo-500 transition-all duration-1000"
                      strokeWidth="11"
                      strokeDasharray={donutCircumference}
                      strokeDashoffset={donutStrokeDashoffset}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center text-center">
                    <span className="text-2xl font-extrabold text-stone-900 dark:text-white leading-none">
                      {globalAccuracy}%
                    </span>
                    <span className="text-[10px] text-stone-400 dark:text-zinc-500 font-semibold mt-1">
                      {(t.admin as any).charts?.correctQuiz || "Kuis Benar"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Mini Health Badges */}
              <div className="grid grid-cols-2 gap-2 text-center text-[10px] pt-1 border-t border-stone-100 dark:border-[#232F46]">
                <div className="p-1.5 bg-stone-50 dark:bg-[#182234] rounded-lg">
                  <span className="text-stone-400 dark:text-zinc-500 block">{(t.admin as any).charts?.activeLearners || "Pembelajar Aktif"}</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {overview.totalUsers > 0 ? Math.round((overview.activeLearners / overview.totalUsers) * 100) : 0}% ({overview.activeLearners}/{overview.totalUsers})
                  </span>
                </div>
                <div className="p-1.5 bg-stone-50 dark:bg-[#182234] rounded-lg">
                  <span className="text-stone-400 dark:text-zinc-500 block">{(t.admin as any).charts?.feedbackDone || "Feedback Selesai"}</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {overview.totalFeedbacks > 0
                      ? Math.round(((overview.totalFeedbacks - overview.pendingFeedbacks) / overview.totalFeedbacks) * 100)
                      : 100}%
                  </span>
                </div>
              </div>
            </div>

            {/* SRS Status Retention Breakdown */}
            <div className="p-4 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs space-y-3 flex flex-col justify-between">
              <div className="flex items-center space-x-2 pb-1 border-b border-stone-100 dark:border-[#232F46]">
                <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xs font-bold text-stone-900 dark:text-white font-mincho">
                  {(t.admin as any).charts?.srsHealthTitle || 'Retensi SRS Platform'}
                </h3>
              </div>

              {/* SRS Segment Progress Bars */}
              <div className="space-y-3 py-1">
                {/* Mastered */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-300 flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>{(t.admin as any).charts?.masteredLabel || "Mastered (Kuasai)"}</span>
                    </span>
                    <span className="font-bold text-stone-800 dark:text-white">
                      {overview.totalMasteredWords} {(t.admin as any).charts?.wordsUnit || "kata"}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 dark:bg-[#1C2538] rounded-full overflow-hidden">
                    <div
                      style={{ width: `${Math.round((overview.totalMasteredWords / totalSrsCount) * 100)}%` }}
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Review */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-sky-700 dark:text-sky-300 flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-sky-500" />
                      <span>{(t.admin as any).charts?.reviewLabel || "Review (SRS Antrean)"}</span>
                    </span>
                    <span className="font-bold text-stone-800 dark:text-white">
                      {overview.srsDistribution?.REVIEW || 0} {(t.admin as any).charts?.wordsUnit || "kata"}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 dark:bg-[#1C2538] rounded-full overflow-hidden">
                    <div
                      style={{ width: `${Math.round(((overview.srsDistribution?.REVIEW || 0) / totalSrsCount) * 100)}%` }}
                      className="h-full bg-sky-500 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Learning */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-amber-700 dark:text-amber-300 flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <span>{(t.admin as any).charts?.learningLabel || "Learning (Sedang Dipelajari)"}</span>
                    </span>
                    <span className="font-bold text-stone-800 dark:text-white">
                      {overview.srsDistribution?.LEARNING || 0} {(t.admin as any).charts?.wordsUnit || "kata"}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 dark:bg-[#1C2538] rounded-full overflow-hidden">
                    <div
                      style={{ width: `${Math.round(((overview.srsDistribution?.LEARNING || 0) / totalSrsCount) * 100)}%` }}
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-stone-400 dark:text-zinc-500 leading-relaxed pt-1 border-t border-stone-100 dark:border-[#232F46]">
                {(t.admin as any).charts?.srsRetentionNote || "Perhitungan retensi interval otomatis berdasarkan model SM-2 spaced repetition seluruh pembelajar."}
              </p>
            </div>
          </div>

          {/* Quick Shortcuts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={() => setActiveTab('users')}
              className="p-3.5 bg-white dark:bg-[#151D2E] hover:bg-stone-50 dark:hover:bg-[#1E293B] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs flex items-center justify-between text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-stone-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                    {t.admin.quickActions.manageUsersTitle}
                  </h4>
                  <p className="text-[11px] text-stone-500 dark:text-zinc-400">
                    {t.admin.quickActions.manageUsersDesc}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('feedbacks')}
              className="p-3.5 bg-white dark:bg-[#151D2E] hover:bg-stone-50 dark:hover:bg-[#1E293B] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs flex items-center justify-between text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-stone-900 dark:text-white group-hover:text-amber-600 transition-colors">
                    {t.admin.quickActions.reviewFeedbackTitle}
                  </h4>
                  <p className="text-[11px] text-stone-500 dark:text-zinc-400">
                    {t.admin.quickActions.reviewFeedbackDesc(overview?.pendingFeedbacks ?? 0)}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: USERS LIST & STATS */}
      {activeTab === 'users' && (
        <div className="space-y-3.5">
          {/* Search & Filter & Add Admin Bar */}
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between">
            <div className="relative flex-1">
              <input
                type="text"
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                placeholder={t.admin.usersTab.searchPlaceholder}
                className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#151D2E] border border-[#EFEAE2] dark:border-[#232F46] rounded-xl text-xs text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-hidden focus:border-indigo-500 shadow-xs"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {/* Level Filter Pills */}
              <div className="flex items-center space-x-1 overflow-x-auto scrollbar-none">
                {(['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevelFilter(lvl)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                      selectedLevelFilter === lvl
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-white dark:bg-[#151D2E] text-stone-600 dark:text-zinc-400 border border-stone-200 dark:border-[#232F46] hover:text-indigo-600'
                    }`}
                  >
                    {lvl === 'all' ? t.admin.usersTab.allLevels : lvl}
                  </button>
                ))}
              </div>

              {/* Add Admin Button */}
              <button
                type="button"
                onClick={() => {
                  setAdminActionError(null);
                  setShowAddAdminModal(true);
                }}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs shadow-xs flex items-center space-x-1.5 shrink-0 cursor-pointer transition-all active:scale-98 whitespace-nowrap"
              >
                <ShieldPlus className="w-3.5 h-3.5" />
                <span>{(t.admin as any).addAdmin?.button || 'Tambah Admin'}</span>
              </button>
            </div>
          </div>

          {/* Users Cards List */}
          <div className="space-y-2">
            {filteredUsers.length === 0 ? (
              <div className="text-center py-10 bg-white dark:bg-[#151D2E] rounded-2xl border border-dashed border-[#EFEAE2] dark:border-[#232F46] text-stone-400 dark:text-zinc-500 text-xs">
                {t.admin.usersTab.empty}
              </div>
            ) : (
              filteredUsers.map((u) => (
                <div
                  key={u.id}
                  onClick={() => handleOpenUserDetail(u.id)}
                  className="p-3.5 bg-white dark:bg-[#151D2E] hover:bg-stone-50 dark:hover:bg-[#1E293B] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-sm shrink-0 border border-indigo-200 dark:border-indigo-800">
                      {u.displayName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-sm text-stone-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                          {u.displayName}
                        </span>
                        {u.role === 'ADMIN' && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center space-x-0.5">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            <span>ADMIN</span>
                          </span>
                        )}
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-stone-100 dark:bg-[#0B0F19] text-stone-700 dark:text-zinc-300">
                          {u.currentLevel}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 dark:text-zinc-400 mt-0.5">
                        {u.email}
                      </p>
                    </div>
                  </div>

                  {/* Stats Badges */}
                  <div className="flex items-center space-x-3 text-xs shrink-0 pl-13 sm:pl-0">
                    <div className="text-center">
                      <span className="text-[10px] font-semibold text-stone-400 dark:text-zinc-500 block">
                        {t.admin.usersTab.streak}
                      </span>
                      <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center justify-center space-x-0.5">
                        <Flame className="w-3 h-3" />
                        <span>{u.streak} {t.admin.usersTab.streakUnit}</span>
                      </span>
                    </div>

                    <div className="text-center">
                      <span className="text-[10px] font-semibold text-stone-400 dark:text-zinc-500 block">
                        {t.admin.usersTab.mastered}
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {u.masteredCount} {t.admin.usersTab.wordsUnit}
                      </span>
                    </div>

                    <div className="text-center">
                      <span className="text-[10px] font-semibold text-stone-400 dark:text-zinc-500 block">
                        {t.admin.usersTab.accuracy}
                      </span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        {u.accuracyRate}%
                      </span>
                    </div>

                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* TAB 3: FEEDBACK & BUG REPORTS */}
      {activeTab === 'feedbacks' && (
        <div className="space-y-3.5">
          {/* Status & Category Filters */}
          <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
            {/* Status Tabs */}
            <div className="flex bg-[#EFEAE2] dark:bg-[#151D2E] p-0.5 rounded-xl">
              {(['ALL', 'PENDING', 'REVIEWED', 'RESOLVED'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setFeedbackStatusFilter(st)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    feedbackStatusFilter === st
                      ? 'bg-white dark:bg-[#1E293B] text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  {st === 'ALL'
                    ? t.admin.feedbackTab.statusAll
                    : st === 'PENDING'
                    ? t.admin.feedbackTab.statusPending
                    : st === 'REVIEWED'
                    ? t.admin.feedbackTab.statusReviewed
                    : t.admin.feedbackTab.statusResolved}
                </button>
              ))}
            </div>

            {/* Category Select */}
            <div className="flex items-center space-x-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={feedbackCategoryFilter}
                onChange={(e) => setFeedbackCategoryFilter(e.target.value)}
                className="bg-white dark:bg-[#151D2E] border border-[#EFEAE2] dark:border-[#232F46] rounded-lg px-2.5 py-1 text-xs text-stone-800 dark:text-zinc-200 cursor-pointer"
              >
                <option value="ALL">{t.admin.feedbackTab.catAll}</option>
                <option value="qna">{t.admin.feedbackTab.catQna}</option>
                <option value="audio">{t.admin.feedbackTab.catAudio}</option>
                <option value="layout">{t.admin.feedbackTab.catLayout}</option>
                <option value="feature">{t.admin.feedbackTab.catFeature}</option>
                <option value="other">{t.admin.feedbackTab.catOther}</option>
              </select>
            </div>
          </div>

          {/* Feedbacks List */}
          <div className="space-y-2.5">
            {filteredFeedbacks.length === 0 ? (
              <div className="text-center py-10 bg-white dark:bg-[#151D2E] rounded-2xl border border-dashed border-[#EFEAE2] dark:border-[#232F46] text-stone-400 dark:text-zinc-500 text-xs">
                {t.admin.feedbackTab.empty}
              </div>
            ) : (
              filteredFeedbacks.map((f) => (
                <div
                  key={f.id}
                  className="p-4 bg-white dark:bg-[#151D2E] rounded-2xl border border-[#EFEAE2] dark:border-[#232F46] shadow-xs space-y-2.5"
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 dark:bg-[#1E293B] text-stone-700 dark:text-zinc-300">
                        {getCategoryLabel(f.category)}
                      </span>
                      {getStatusBadge(f.status)}
                    </div>

                    <span className="text-[10px] text-stone-400 dark:text-zinc-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{new Date(f.createdAt).toLocaleDateString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
                    </span>
                  </div>

                  {/* Feedback Description */}
                  <p className="text-xs text-stone-800 dark:text-zinc-200 leading-relaxed whitespace-pre-wrap">
                    {f.description}
                  </p>

                  {/* Footer Row: User Info & Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 dark:border-[#232F46] text-[11px]">
                    <div className="text-stone-500 dark:text-zinc-400">
                      <span className="font-semibold text-stone-700 dark:text-zinc-300">
                        {f.userName || (language === 'my' ? 'လေ့လာသူ' : language === 'en' ? 'Learner' : 'Pengguna')}
                      </span>
                      {f.userEmail && <span className="ml-1 text-[10px] opacity-75">&lt;{f.userEmail}&gt;</span>}
                    </div>

                    <div className="flex items-center space-x-1.5">
                      {f.status !== 'REVIEWED' && f.status !== 'RESOLVED' && (
                        <button
                          onClick={() => handleUpdateFeedbackStatus(f.id, 'REVIEWED')}
                          className="px-2.5 py-1 bg-sky-50 dark:bg-sky-950 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900 font-semibold rounded-lg text-[10px] transition-colors cursor-pointer border border-sky-200 dark:border-sky-800"
                        >
                          {t.admin.feedbackTab.reviewAction}
                        </button>
                      )}
                      {f.status !== 'RESOLVED' && (
                        <button
                          onClick={() => handleUpdateFeedbackStatus(f.id, 'RESOLVED')}
                          className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900 font-semibold rounded-lg text-[10px] transition-colors cursor-pointer border border-emerald-200 dark:border-emerald-800"
                        >
                          {t.admin.feedbackTab.resolveAction}
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteFeedback(f.id)}
                        className="p-1 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                        title={t.admin.feedbackTab.deleteTooltip}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* USER DETAIL MODAL */}
      {selectedUserDetail && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedUserDetail(null);
          }}
          className="fixed inset-0 z-60 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#121824] border border-[#EFEAE2] dark:border-[#232F46] rounded-2xl max-w-md w-full max-h-[88vh] flex flex-col overflow-hidden shadow-2xl animate-slide-up"
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-[#EFEAE2] dark:border-[#232F46] flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-xs border border-indigo-200 dark:border-indigo-800">
                  {selectedUserDetail.userStats.displayName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="font-bold text-sm text-stone-900 dark:text-white">
                      {selectedUserDetail.userStats.displayName}
                    </h3>
                    {selectedUserDetail.userStats.role === 'ADMIN' && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        ADMIN
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-zinc-400">
                    {selectedUserDetail.userStats.email}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedUserDetail(null)}
                className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] dark:hover:bg-[#28354D] text-stone-500 hover:text-stone-800 dark:text-zinc-400 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 overflow-y-auto space-y-4 text-xs">
              {/* Role & Admin Access Actions */}
              <div className="p-3 bg-stone-50 dark:bg-[#182234] rounded-xl border border-stone-200/70 dark:border-[#232F46] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-600 dark:text-zinc-300">
                    {(t.admin as any).addAdmin?.roleLabel || 'Hak Akses'}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                      selectedUserDetail.userStats.role === 'ADMIN'
                        ? 'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800'
                        : 'bg-stone-100 dark:bg-[#1E293B] text-stone-700 dark:text-zinc-400 border-stone-200 dark:border-[#232F46]'
                    }`}
                  >
                    {selectedUserDetail.userStats.role === 'ADMIN' ? 'ADMIN' : 'USER'}
                  </span>
                </div>

                <div className="pt-1">
                  {selectedUserDetail.userStats.role === 'ADMIN' ? (
                    <button
                      type="button"
                      onClick={() =>
                        handleUpdateRole(
                          selectedUserDetail.userStats.id,
                          'USER',
                          selectedUserDetail.userStats.displayName
                        )
                      }
                      className="w-full py-2 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>{(t.admin as any).addAdmin?.demoteAction || (language === 'my' ? 'ရိုးရိုးအသုံးပြုသူသို့ လျှော့ချရန်' : language === 'en' ? 'Demote to Regular User' : 'Turunkan ke Pengguna Biasa')}</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        handleUpdateRole(
                          selectedUserDetail.userStats.id,
                          'ADMIN',
                          selectedUserDetail.userStats.displayName
                        )
                      }
                      className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{(t.admin as any).addAdmin?.promoteAction || 'Jadikan Admin'}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Top Stats Grid */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2.5 bg-stone-50 dark:bg-[#182234] rounded-xl text-center border border-stone-200/70 dark:border-[#232F46]">
                  <span className="text-[10px] text-stone-400 dark:text-zinc-500 block font-semibold">{t.admin.userDetail.level}</span>
                  <span className="font-bold text-sm text-indigo-600 dark:text-indigo-400">{selectedUserDetail.userStats.currentLevel}</span>
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-[#182234] rounded-xl text-center border border-stone-200/70 dark:border-[#232F46]">
                  <span className="text-[10px] text-stone-400 dark:text-zinc-500 block font-semibold">{t.admin.userDetail.streak}</span>
                  <span className="font-bold text-sm text-amber-600 dark:text-amber-400">{t.admin.userDetail.streakDays(selectedUserDetail.userStats.streak)}</span>
                </div>
                <div className="p-2.5 bg-stone-50 dark:bg-[#182234] rounded-xl text-center border border-stone-200/70 dark:border-[#232F46]">
                  <span className="text-[10px] text-stone-400 dark:text-zinc-500 block font-semibold">{t.admin.userDetail.accuracy}</span>
                  <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400">{selectedUserDetail.userStats.accuracyRate}%</span>
                </div>
              </div>

              {/* SRS Mastery Breakdown */}
              <div className="p-3 bg-stone-50 dark:bg-[#182234] rounded-xl border border-stone-200/70 dark:border-[#232F46] space-y-2">
                <span className="text-[11px] font-bold text-stone-600 dark:text-zinc-300 block">
                  {t.admin.userDetail.srsTitle}
                </span>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-white dark:bg-[#1E293B] rounded-lg">
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">{t.admin.userDetail.mastered}</span>
                    <span className="text-sm font-extrabold text-stone-800 dark:text-white">
                      {selectedUserDetail.statusBreakdown.MASTERED ?? 0}
                    </span>
                  </div>
                  <div className="p-2 bg-white dark:bg-[#1E293B] rounded-lg">
                    <span className="text-[10px] text-sky-600 dark:text-sky-400 font-bold block">{t.admin.userDetail.review}</span>
                    <span className="text-sm font-extrabold text-stone-800 dark:text-white">
                      {selectedUserDetail.statusBreakdown.REVIEW ?? 0}
                    </span>
                  </div>
                  <div className="p-2 bg-white dark:bg-[#1E293B] rounded-lg">
                    <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold block">{t.admin.userDetail.learning}</span>
                    <span className="text-sm font-extrabold text-stone-800 dark:text-white">
                      {selectedUserDetail.statusBreakdown.LEARNING ?? 0}
                    </span>
                  </div>
                </div>
              </div>

              {/* Recent Sessions */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-stone-600 dark:text-zinc-300 block">
                  {t.admin.userDetail.recentSessions}
                </span>
                {selectedUserDetail.recentSessions.length === 0 ? (
                  <p className="text-stone-400 dark:text-zinc-500 text-xs">{t.admin.userDetail.noSessions}</p>
                ) : (
                  <div className="space-y-1.5">
                    {selectedUserDetail.recentSessions.map((s) => (
                      <div
                        key={s.id}
                        className="p-2.5 bg-stone-50 dark:bg-[#182234] rounded-xl flex items-center justify-between border border-stone-200/70 dark:border-[#232F46]"
                      >
                        <div>
                          <span className="font-bold text-stone-800 dark:text-white block">
                            {t.admin.userDetail.deckPrefix}{s.deckId}
                          </span>
                          <span className="text-[10px] text-stone-400 dark:text-zinc-500">
                            {new Date(s.startedAt).toLocaleDateString(language === 'my' ? 'my-MM' : language === 'en' ? 'en-US' : 'id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-indigo-600 dark:text-indigo-400 block">
                            {t.admin.userDetail.correctSummary(s.cardsCorrect, s.cardsStudied)}
                          </span>
                          <span className="text-[10px] text-stone-400 dark:text-zinc-500">
                            {s.cardsStudied > 0 ? Math.round((s.cardsCorrect / s.cardsStudied) * 100) : 0}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADD / PROMOTE ADMIN MODAL */}
      {showAddAdminModal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowAddAdminModal(false);
          }}
          className="fixed inset-0 z-60 bg-black/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#121824] border border-[#EFEAE2] dark:border-[#232F46] rounded-2xl max-w-sm w-full p-5 shadow-2xl animate-slide-up space-y-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-[#232F46]">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <ShieldPlus className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-stone-900 dark:text-white font-mincho">
                  {(t.admin as any).addAdmin?.modalTitle || 'Tambah & Kelola Hak Akses Admin'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAddAdminModal(false)}
                className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] text-stone-500 dark:text-zinc-400 flex items-center justify-center text-xs cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Tabs: Promote vs Create */}
            <div className="flex bg-[#EFEAE2] dark:bg-[#151D2E] p-1 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setAdminModalTab('promote');
                  setAdminActionError(null);
                }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  adminModalTab === 'promote'
                    ? 'bg-white dark:bg-[#1E293B] text-stone-900 dark:text-white shadow-xs'
                    : 'text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {(t.admin as any).addAdmin?.tabPromote || (language === 'my' ? 'အသုံးပြုသူကို ရာထူးမြှင့်ရန်' : language === 'en' ? 'Promote User' : 'Promosikan Pengguna')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setAdminModalTab('create');
                  setAdminActionError(null);
                }}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  adminModalTab === 'create'
                    ? 'bg-white dark:bg-[#1E293B] text-stone-900 dark:text-white shadow-xs'
                    : 'text-stone-500 dark:text-zinc-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {(t.admin as any).addAdmin?.tabCreate || 'Buat Admin Baru'}
              </button>
            </div>

            {adminActionError && (
              <div className="p-2.5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-400 text-xs rounded-xl flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{adminActionError}</span>
              </div>
            )}

            {/* TAB 1: Promote Existing User */}
            {adminModalTab === 'promote' && (
              <form onSubmit={handlePromoteExisting} className="space-y-3.5 text-xs">
                <div>
                  <label className="font-semibold text-stone-700 dark:text-zinc-300 block mb-1">
                    {(t.admin as any).addAdmin?.selectUserLabel || (language === 'my' ? 'မှတ်ပုံတင်ထားသော အသုံးပြုသူကို ရွေးချယ်ပါ' : language === 'en' ? 'Select Registered User' : 'Pilih Pengguna Terdaftar')}
                  </label>
                  <select
                    required
                    value={selectedPromoteUserId}
                    onChange={(e) => setSelectedPromoteUserId(Number(e.target.value) || '')}
                    className="w-full px-3 py-2 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#232F46] rounded-xl text-xs text-stone-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                  >
                    <option value="">{(t.admin as any).addAdmin?.selectPlaceholder || '-- Pilih pengguna untuk dijadikan Admin --'}</option>
                    {users
                      .filter((u) => u.role !== 'ADMIN')
                      .map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.displayName} ({u.email}) - {u.currentLevel}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddAdminModal(false)}
                    className="flex-1 py-2 bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] text-stone-700 dark:text-zinc-300 font-bold rounded-xl text-xs cursor-pointer transition-colors"
                  >
                    {t.common.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={adminSubmitting || !selectedPromoteUserId}
                    className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-xs cursor-pointer transition-all active:scale-98"
                  >
                    {adminSubmitting ? '...' : ((t.admin as any).addAdmin?.promoteBtn || 'Jadikan Admin')}
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: Create New Admin Account */}
            {adminModalTab === 'create' && (
              <form onSubmit={handleCreateNewAdmin} className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold text-stone-700 dark:text-zinc-300 block mb-1">
                    {(t.admin as any).addAdmin?.usernameOrEmailLabel || 'Email atau Username'}
                  </label>
                  <input
                    type="text"
                    required
                    value={newAdminEmail}
                    onChange={(e) => setNewAdminEmail(e.target.value)}
                    placeholder="misal: admin2 atau nama@email.com"
                    className="w-full px-3 py-2 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#232F46] rounded-xl text-xs text-stone-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                    autoCapitalize="none"
                    autoCorrect="off"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 dark:text-zinc-300 block mb-1">
                    {(t.admin as any).addAdmin?.nameLabel || 'Nama Lengkap'}
                  </label>
                  <input
                    type="text"
                    value={newAdminName}
                    onChange={(e) => setNewAdminName(e.target.value)}
                    placeholder="Nama Lengkap Admin"
                    className="w-full px-3 py-2 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#232F46] rounded-xl text-xs text-stone-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="font-semibold text-stone-700 dark:text-zinc-300 block mb-1">
                    {(t.admin as any).addAdmin?.passwordLabel || 'Password (Min. 6 Karakter)'}
                  </label>
                  <input
                    type="password"
                    required
                    value={newAdminPassword}
                    onChange={(e) => setNewAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-stone-50 dark:bg-[#0B0F19] border border-stone-200 dark:border-[#232F46] rounded-xl text-xs text-stone-900 dark:text-white focus:outline-hidden focus:border-indigo-500"
                  />
                </div>

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddAdminModal(false)}
                    className="flex-1 py-2 bg-stone-100 hover:bg-stone-200 dark:bg-[#1E293B] text-stone-700 dark:text-zinc-300 font-bold rounded-xl text-xs cursor-pointer transition-colors"
                  >
                    {t.common.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={adminSubmitting}
                    className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl text-xs shadow-xs cursor-pointer transition-all active:scale-98"
                  >
                    {adminSubmitting ? '...' : ((t.admin as any).addAdmin?.createBtn || 'Buat Akun Admin')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
