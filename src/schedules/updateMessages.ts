import cron from "node-cron";
import { HistoryController } from "../controllers/history.controller";

const historyController = new HistoryController();

// Agenda a tarefa para rodar a cada 4 dias entre 14:00 e 16:00 horas
cron.schedule("0 14 */4 * *", async () => {
  console.log("Atualizando mensagens e títulos às 14:00 a cada 4 dias...");
  await historyController.updateHistoryCode();
  console.log("Mensagens e títulos atualizados.");
});
// "*/10 * * * * *"
// 0 0 */4 * *
