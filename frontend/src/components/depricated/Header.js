import RouterLink from "./RouterLink";
import Button from "./Button/Button";

export default function Header() {
    return (
        <header>
            <RouterLink to="/" ><Button>Main Page</Button></RouterLink>
            <RouterLink to={"random"}><Button>Random Page</Button></RouterLink>
        </header>);
}