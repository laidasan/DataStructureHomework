import { PriorityQueue } from "./core/queue/PriorityQueue.js";
import { HistTask } from "./core/task/HistTask.js";
import { PaperTask } from "./core/task/PaperTask.js";
import { ScissorsTask } from "./core/task/ScissorsTask.js";
import { LoggerDecorator } from "./core/task/PromiseTask/LoggerDecorator.js";
import { Game } from "./core/Game.js";

const container = document.querySelector('#container');
const taskQueue = new PriorityQueue();
taskQueue.enqueue(new LoggerDecorator({
  task: new HistTask({ delay: 300 }),
  logger: console
}));
taskQueue.enqueue(new LoggerDecorator({
  task: new PaperTask({ delay: 900 }),
  logger: console
}));
taskQueue.enqueue(new LoggerDecorator({
  task: new ScissorsTask({ delay: 1200 }),
  logger: console
}));

const game = new Game(taskQueue, container);
game.renderView()

taskQueue.registerObserver(game)


setTimeout(() => {
  game.start();
}, 1000)




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
}, 2000);
