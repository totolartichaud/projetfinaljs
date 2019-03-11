* {
    box-sizing: border-box;
}


/*FIRST NAV*/

.navbar-1 {
    position: relative;
    background-color: rgba(0, 0, 0, 0.24);
    height: 52px;
    line-height: 52px;
    text-align: center;
}

.navbar-1 a {
    
    text-decoration: none;
    font-family: sans-serif;
    color: #343434;
    font-size: 18px;
}

.nav-logo {
    float: left;
    height: 100%;
    margin-left: 20px;
}

.nav-logo a {
    font-size: 22px;
    font-weight: bold;
    display: block;
    padding: 0 10px;
}

.navbar-1 > ul {
    transition: all .33s ease 0s;
    font-size: 0;
}

.navbar-1 > ul > li:last-child {
    margin-left: 10px;
    position: relative;
}

.navbar-1 > ul, .navbar-1 > ul > li {
    display: inline-block;
    height: 100%;
}

.navbar-1 li a {
    display: block;
    padding: 0 15px;
}

.navbar-1 li a:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

#navbarDrowndownMenu {
    display: none;
    position: absolute;
    width: 200px;
    left: 0;
    top: 100%;
    border: 1px solid rgba(128, 128, 128, 0.295);
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    margin-top: 15px;
}

#navbarDropdownMenu li {
    width: 100%;
}

#navbarDropdownMenu li a {
    height: 100%;
    font-size: 15px ;
}
