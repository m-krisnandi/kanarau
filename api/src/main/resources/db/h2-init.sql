CREATE ALIAS IF NOT EXISTS pg_get_serial_sequence AS '
String pg_get_serial_sequence(String table, String column) {
    return table;
}
';

CREATE ALIAS IF NOT EXISTS setval AS '
long setval(java.sql.Connection conn, String seq, long val) throws java.sql.SQLException {
    String table = seq;
    if (table.endsWith("_id_seq")) {
        table = table.substring(0, table.length() - 7);
    }
    try (java.sql.Statement stmt = conn.createStatement()) {
        stmt.execute("ALTER TABLE " + table + " ALTER COLUMN id RESTART WITH " + (val + 1));
    } catch (Exception e) {
        // ignore
    }
    return val;
}
';
