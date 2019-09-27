function createdBy(parent, args, context) {
  return context.prisma.client({ id: parent.id }).createdBy();
}

module.exports = {
  createdBy,
};
