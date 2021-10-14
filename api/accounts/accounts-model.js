const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("accounts");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("accounts").where("id", id).first();
};

const create = (account) => {
  // DO YOUR MAGIC
  const [id] = await db("accounts").insert(account);
  return getById(id);
};

const updateById = (id, account) => {
  // DO YOUR MAGIC
  await db("accounts").where("id", id).updateById(account);
  return getById(id);
};

const deleteById = (id) => {
  // DO YOUR MAGIC
  const deleteAcc = await getById(id);
  await db("accounts").where("id", id).delete();
  return deleteAcc;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
