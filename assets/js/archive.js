// #archive_list

function getArchive() {
  client
    .from("firstSetUp")
    .select("*")
    .then((res) => {
      res.data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} by ${item.content}`;
        document.getElementById("archive_list").appendChild(li);
      });
    });
}

getArchive();
