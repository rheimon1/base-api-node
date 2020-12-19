class RootService {
    constructor(model) {
        this.model = model;
    }

    async find() {
        return await this.model.find();
    }

    async findById(id) {
        let response = await this.model.findOne({ _id: id });

        return response;
    }

    async _findByIdAndUpdate(id, data) {
        const response = await this.model.findByIdAndUpdate(id, { ...data })

        return response;
    }

    async softDelete(id) {
        await this.model.findByIdAndUpdate(id, {
            deleted_at: new Date()
        })
        return true;
    }

    async destroy(id) {
        const response = await this.model.destroy(id);

        if (!response) return false;
        return true;
    }

    async saveRecord(data) {
        const model = new this.model({ ...data});
        return await model.save();
    }
}

module.exports = RootService;