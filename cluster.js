const cluster = require('cluster');
const os = require('os');

const CPUs = os.cpus();

if (cluster.isMaster) {
  CPUs.forEach(() => cluster.fork());

  cluster.on('listening', worker =>
    console.log('Cluster %d connected', worker.process.pid),
  );
} else require('./index');
