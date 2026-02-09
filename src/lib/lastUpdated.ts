export async function getLastUpdated() {
  const res = await fetch(
    "https://api.github.com/repos/giannicottone/gianni-portfolio/commits?per_page=1",
    { next: { revalidate: 3600 } } // re-check hourly
  );

  const data = await res.json();
  const iso = data[0].commit.author.date;
  return new Date(iso);
}
