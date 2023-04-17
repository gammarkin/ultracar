import { model as mongooseCreateModel, Schema } from 'mongoose';

const ClientSchema = new Schema(
    {
        cpf: { type: Number },
        name: { type: String },
        address: { type: String },
        car: { type: String },
    },
    { versionKey: false }
);

const model = mongooseCreateModel('clients', ClientSchema);

const createMany = async (obj) => model.insertMany(obj);

const create = async (obj) => model.create(obj);

const read = async () => model.find({});

const readOne = async (cpf) => model.findOne({ cpf })

const destroyAll = async () => model.deleteMany({});

export default {
    read,
    createMany,
    destroyAll,
    create,
    readOne,
};
