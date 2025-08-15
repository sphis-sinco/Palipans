var skits = [
        {
                name: '',
                release: "8/15/2025",
                link: "index.html",
        },
];

var addSkit = function (name = '', rel = "", href = "") {
        skits.push({
                name: name,
                release: rel,
                link: href,
        });
};

skits = [];
addSkit("Dummy Comic", "8/15/2025", "comics/dummyComic/comic.html");

var list = document.getElementById("comics-list");

for (let skit of skits) {
        var skitString =skit.name;

        var card = document.createElement("li");
        card.className = "card";

        var skitElement = document.createElement("h4");
        skitElement.innerHTML = skitString;

        if (skit.release != null) {
                skitElement.innerHTML += " (" + skit.release + ")";
        }
        card.appendChild(skitElement);

        if (skit.release == null) {
                var linkButton = document.createElement("button");
                linkButton.innerHTML = "Coming Eventually";
        } else {
                var linkButton = document.createElement("a");
                linkButton.innerHTML = "Go to " + skitString;
                linkButton.href = skit.link;
        }
        card.appendChild(linkButton);

        list.appendChild(card);
}
