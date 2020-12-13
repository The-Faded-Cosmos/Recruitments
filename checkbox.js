function toggle(checkbox)
{
    var link = document.getElementById("agreelink");
    if (checkbox.checked)
        link.style.display = "inline";
    else
        link.style.display = "none";
}
