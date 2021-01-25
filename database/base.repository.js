export default class BaseRepository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  create(model) {
    return this.#model.create(model);
  }

  findById(id) {
    return this.#model.findById(id);
  }

  find(where = {}, options = {}) {
    return this.#model.findAll({
      where: this.applyDefaults(where),
      ...(options || {}),
    });
  }

  findOne(where, options) {
    return this.find(where, { ...options, limit: 1 }).then((res) =>
      res ? res[0] : res
    );
  }

  update(where, update) {
    return this.#model
      .update(update, { where: this.applyDefaults(where) })
      .then((result) => (result && result[0]) || 0);
  }

  updateById(id, update) {
    return this.update({ id }, update);
  }

  deleteById(id) {
    return this.update({ id }, { active: false });
  }

  delete(where) {
    return this.update(where, { active: false });
  }

  applyDefaults(where) {
    if (!where) return { active: true };
    if (where.active === undefined) where.active = true;
    return where;
  }
}
