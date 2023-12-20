import { Document, Schema } from 'mongoose';
import * as connections from '../config/connection/connection';

/**
 * @export
 * @interface IBlockModel
 * @extends {Document}
 */
export interface IBlockModel extends Document {
  latestBlock: string;
}

const BlockModelSchema: Schema = new Schema({
    latestBlock: {
        type: String,
        trim: true,
        required: true,
    },
}, {
    collection: 'blockModel',
    versionKey: false,
    timestamps: true,
});

export default connections.db.model<IBlockModel>('blockModel', BlockModelSchema, 'blockModel');
