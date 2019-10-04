async function clientList(parent, args, context, _info) {
  const where = args.filter ? {
    name_contains: args.filter,
  } : {};

  const clients = context.prisma.clients({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  const count = await context.prisma
    .clientsConnection({
      where,
    })
    .aggregate()
    .count();

  return {
    clients,
    count,
  };
}

module.exports = {
  clientList,
};
