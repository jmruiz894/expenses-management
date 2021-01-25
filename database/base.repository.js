export default class BaseRepository {
  #model;

  constructor(model) {
    this.#model = model;
  }

  findById(id) {
    return this.#model.findById(id);
  }

  deleteById() {}
}
