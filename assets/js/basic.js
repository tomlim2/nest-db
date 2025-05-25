const body = document.querySelector("body");

// Create header element
const header = document.createElement('header');
header.innerHTML = `
	<a href="/index.html"><button>user</button></a>
	<a href="/archive/index.html"><button>archive</button></a>
	<a href="/display/index.html"><button>display</button></a>
`;
body.prepend(header);
