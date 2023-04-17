import { model as mongooseCreateModel, Schema } from 'mongoose';

const WorkSchema = new Schema(
    {
        id: { type: Number },
        client_name: { type: String },
        worker_name: { type: String },
        job: { type: String },
        date: { type: String },
    },
    { versionKey: false }
);

const model = mongooseCreateModel('orders', WorkSchema);

const createMany = async (obj) => model.insertMany(obj);

const create = async (obj) => model.create(obj);

const read = async () => model.find({});

const readOne = async (id) => model.find({ id })

const destroyAll = async () => model.deleteMany({});

export default {
    read,
    createMany,
    destroyAll,
    create,
    readOne,
};
