// // models/Achievement.js
// import mongoose from 'mongoose';

// const { Schema, model } = mongoose;

// const achievementSchema = new Schema(
//   {
//     mentee: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     achievementText: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true, // Adds createdAt and updatedAt fields
//   }
// );

// const Achievement = model('Achievement', achievementSchema);

// export default Achievement;


// models/Achievement.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const achievementSchema = new Schema(
  {
    mentee: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    achievementText: {
      type: String,
      required: true,
      trim: true,
    },
    documents: [
      {
        filename: { type: String, required: true },
        path: { type: String, required: true },
        mimetype: { type: String, required: true },
        size: { type: Number, required: true },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

const Achievement = model('Achievement', achievementSchema);

export default Achievement;

