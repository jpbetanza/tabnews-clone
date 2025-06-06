import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const version = await database.query("SHOW server_version;");
  const maxConnections = await database.query("SHOW max_connections;");

  const dbName = process.env.POSTGRES_DB;
  const connections = await database.query({
    text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname=$1;`,
    values: [dbName],
  });
  console.log(connections);
  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: version.rows[0].server_version,
        max_connections: parseInt(maxConnections.rows[0].max_connections),
        oppened_connections: connections.rows[0].count,
      },
    },
  });
}

export default status;
