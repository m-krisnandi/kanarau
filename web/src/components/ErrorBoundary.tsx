import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    const isChunkError = /text\/html|dynamically imported module|Loading chunk|Failed to fetch/i.test(error.message);
    if (isChunkError && typeof window !== 'undefined') {
      const lastReload = Number(sessionStorage.getItem('last_chunk_reload') || 0);
      if (Date.now() - lastReload > 8000) {
        sessionStorage.setItem('last_chunk_reload', String(Date.now()));
        window.location.reload();
      }
    }
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Kanarau Uncaught Error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0B0F19] text-[#1E1B18] dark:text-slate-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white dark:bg-[#151D2E] rounded-2xl p-6 shadow-xl border border-[#EFEAE2] dark:border-[#232F46] text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 mx-auto flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>

            {(() => {
              const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('kanarau-language') : null;
              let lang = 'id';
              try {
                const parsed = storedLanguage ? JSON.parse(storedLanguage) : null;
                if (parsed?.state?.language === 'en' || parsed?.state?.language === 'my' || parsed?.state?.language === 'id') {
                  lang = parsed.state.language;
                }
              } catch {
                lang = 'id';
              }
              const title = lang === 'my' ? 'စာမျက်နှာ ဖော်ပြရာတွင် အခက်အခဲရှိနေသည်' : lang === 'en' ? 'Unable to Load View' : 'Terjadi Kendala Memuat Tampilan';
              const sub = lang === 'my' ? 'ဤစာမျက်နှာကို တင်ယူရာတွင် ယာယီ ချို့ယွင်းချက် ဖြစ်ပေါ်နေပါသည်။ အောက်ပါခလုတ်ကို နှိပ်၍ ပြန်လည်စတင်ပါ။' : lang === 'en' ? 'The application encountered a temporary issue while loading this view. Click below to reload the session.' : 'Aplikasi mengalami gangguan sementara saat memuat rute. Klik tombol di bawah untuk menyegarkan sesi.';
              const btn = lang === 'my' ? 'စာမျက်နှာ ပြန်ဖွင့်ပါ' : lang === 'en' ? 'Reload Page' : 'Muat Ulang Halaman';
              return (
                <>
                  <div className="space-y-1">
                    <h2 className="text-base font-bold font-mincho text-[#1E1B18] dark:text-slate-100">
                      {title}
                    </h2>
                    <p className="text-xs text-[#78716C] dark:text-slate-400 leading-relaxed">
                      {sub}
                    </p>
                  </div>

                  {this.state.error?.message && (
                    <div className="p-2.5 bg-stone-50 dark:bg-slate-900 rounded-xl text-left border border-stone-200 dark:border-slate-800 text-[11px] font-mono text-stone-600 dark:text-slate-400 overflow-x-auto max-h-24">
                      {this.state.error.message}
                    </div>
                  )}

                  <button
                    onClick={this.handleReload}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md active:scale-98"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{btn}</span>
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
