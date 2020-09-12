import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTarget/ConsoleReport";
import { HtmlReport } from "./reportTarget/HmtlReport";
import { WinsAnalysis } from "./analyzer/WinsAnalysis";
import { Summary } from "./Summary";
// const reader = new MatchReader("football.csv");
// reader.read();

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
