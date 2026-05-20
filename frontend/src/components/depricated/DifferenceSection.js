import Button from "./Button/Button";

export default function DifferencesSection() {
    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>
            <Button onClick={() => console.log("button Подход")}>Подход</Button>
            <Button onClick={() => console.log("button Доступность")}>
                Доступность
            </Button>
            <Button onClick={() => console.log("button Концентрация")}>
                Концентрация
            </Button>
        </section>
    );
}