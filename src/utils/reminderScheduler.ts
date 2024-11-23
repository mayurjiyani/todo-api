import { CronJob } from "cron";
import Todo from "../models/Todo";
import { sendEmail } from "../config/mailer";
import User from "../models/User";

export const scheduleReminders = () => {
    const job = new CronJob("* * * * *", async () => {
        const now = new Date();
        const fiveMinutesLater = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes from now

        const todos = await Todo.find({
            reminderTime: { $lte: fiveMinutesLater, $gte: now },
            isCompleted: false,
        }).populate("user");

        todos.forEach(async (todo) => {
            const user = await User.findById(todo.user);
            if (user) {
                await sendEmail(
                    user.username,
                    "Todo Reminder",
                    `Reminder for your task: ${todo.title}\nDescription: ${todo.description}`
                );
            }
        });
    });

    job.start();
};
