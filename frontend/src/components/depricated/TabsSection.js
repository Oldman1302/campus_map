import Button from "./depricated/Button/Button";

export default function TabsSection({active, onChange}) {
    return (
        <section >
            <Button isActive = {active === "main"} onClick = {() => onChange("main")}>Main</Button>
            <Button isActive = {active === "extra"} onClick = {() => onChange("extra")}>Extra</Button>
            <Button isActive = {active === "effect"} onClick = {() => onChange("effect")}>Effect</Button>
        </section>
    )
}