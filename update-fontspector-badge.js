const fs = require("fs");

// Paths - adjust as needed
const reportPath = "fontspector/fontspector-report.html";  // Path to your report
const badgePath = "badges/fontspector.json";               // Path to your badge output

// Read the report HTML
const html = fs.readFileSync(reportPath, "utf8");

// Regex to find the PASS percentage in the table (the last <td> in the third <tr>)
const passMatch = html.match(/<tr>\s*<td>\d+.*?<\/td>\s*<td>\d+.*?<\/td>\s*<td>\d+.*?<\/td>\s*<td>\d+.*?<\/td>\s*<td>\d+.*?<\/td>\s*<td>(\d+)\s*<\/td>[\s\S]*?<tr>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>(\d+%)<\/td>/);

// Fallback: try to find the PASS percentage from the line with PASS
const passPercent = passMatch ? passMatch[2] : (() => {
  const percents = html.match(/<tr>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>\d+%<\/td>\s*<td>(\d+%)<\/td>/);
  return percents ? percents[1] : "unknown";
})();

let color = "lightgrey";
if (passPercent !== "unknown") {
  const score = parseInt(passPercent);
  if (score >= 90) color = "green";
  else if (score >= 70) color = "orange";
  else color = "red";
}

// Optionally, you can add a logoSvg here if you want
const badge = {
  schemaVersion: 1,
  label: "Fontspector QA",
  message: passPercent,
  color: color
};

fs.writeFileSync(badgePath, JSON.stringify(badge, null, 2));
console.log(`Updated ${badgePath}:`, badge);
