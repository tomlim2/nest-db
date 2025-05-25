let channel = client.channel("firstChannel");
channel.on(
	"postgres_changes",
	{
		event: "INSERT", // "*" all events
		schema: "public",
		table: "firstSetUp",
	},
	(payload) => {
		console.log(payload);
		const resText = document.getElementById("real-time-res");
		resText.innerText = "";
		resText.innerText = `${payload.new.content} by ${payload.new.name}`;
	}
);
channel.subscribe();

new QRCode(document.querySelector("#qrcode"), location.origin);