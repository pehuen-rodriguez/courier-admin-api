async function clients(parent, args, context, _info) {
  const where = args.filter ? {
    name_contains: args.filter,
  } : {};

  return context.prisma.clients({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  });

  // const count = 7;

  // return {
  //   returnClients,
  //   count,
  // };
}

module.exports = {
  clients,
};
