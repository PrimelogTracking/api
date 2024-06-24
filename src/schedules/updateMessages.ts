import cron from "node-cron";
import { HistoryController } from "../controllers/history.controller";

const historyController = new HistoryController();

// Agenda a tarefa para rodar todos os dias às 14:00
cron.schedule("0 14 * * *", async () => {
  console.log("Atualizando mensagens e títulos às 14:00...");
  await historyController.updateHistoryCode();
  console.log("Mensagens e títulos atualizados às 14:00.");
});
// "*/10 * * * * *"
// 0 0 */4 * *
