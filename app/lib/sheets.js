export async function getArticles() {
  const sheetId = "1WZsfGGsf-zShMDcwPJh3QhCAWZ_Wy3MxynhB_8autZI";
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
  
  const res = await fetch(url, { cache: "no-store" });
  const text = await res.text();
  
  const jsonString = text.replace("/*O_o*/", "").trim();
  const match = jsonString.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/);
  
  if (!match) {
    console.error("Could not parse response");
    return [];
  }

  const json = JSON.parse(match[1]);
  const rows = json.table.rows;
  
  return rows.map((row) => ({
    id: row.c[0]?.v,
    title: row.c[1]?.v,
    category: row.c[2]?.v,
    summary: row.c[3]?.v,
    body: row.c[4]?.v,
    date: row.c[5]?.v,
    image: row.c[6]?.v,
  }));
}