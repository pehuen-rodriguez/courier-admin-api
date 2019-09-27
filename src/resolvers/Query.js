function clients(parent, args, context, _info) {
  return context.prisma.clients();
}

module.exports = {
  clients,
};
