import { PriorityQueue } from "./core/queue/PriorityQueue.js";
import { HistTask } from "./core/task/HistTask.js";
import { PaperTask } from "./core/task/PaperTask.js";
import { ScissorsTask } from "./core/task/ScissorsTask.js";
import { LoggerDecorator } from "./core/task/PromiseTask/LoggerDecorator.js";
import { Game } from "./core/Game.js";

const taskQueue = new PriorityQueue();
taskQueue.enqueue(new LoggerDecorator({
  task: new HistTask(),
  logger: console
}));
taskQueue.enqueue(new LoggerDecorator({
  task: new PaperTask(),
  logger: console
}));
taskQueue.enqueue(new LoggerDecorator({
  task: new ScissorsTask(),
  logger: console
}));

const game = new Game(taskQueue);

game.start();
taskQueue.registerObserver(game)



setTimeout(() => {
  game.appendTask(new LoggerDecorator({
    task: new HistTask({ delay: 1000}),
    logger: console
  }));
  game.appendTask(new LoggerDecorator({
    task: new PaperTask({ delay: 1000}),
    logger: console
  }));
  game.appendTask(new LoggerDecorator({
    task: new ScissorsTask({ delay: 1000}),
    logger: console
  }));
}, 1000);
