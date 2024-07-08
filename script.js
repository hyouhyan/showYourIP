let domain = location.hostname

if (domain.startsWith("v4.") || domain.startsWith("v6.")) {
    domain = domain.slice(3)
}

let v4domain = "v4." + domain
let v6domain = "v6." + domain

let v4link = document.getElementById("v4link")
let v6link = document.getElementById("v6link")

v4link.href = "http://" + v4domain
v6link.href = "http://" + v6domain