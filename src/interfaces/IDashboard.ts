import IStatistic from "./IStatistic";

export default interface IDashboard {
    scenarios: IStatistic;
    lists: IStatistic;
    dialogs: IStatistic;
}