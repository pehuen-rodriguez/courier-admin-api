function newClientSubscribe(parent, args, context, _info) {
  return context.prisma.$subscribe.client({ mutation_in: ['CREATED'] }).node();
}

const newClient = {
  subscribe: newClientSubscribe,
  resolve: (payload) => payload,
};

module.exports = {
  newClient,
};
