import WayToTeach from "./WaysToTeach";

export default function TeachingSection() {
    const titles = ["Фильтрация", "Формат обучения", "Наставники"];

    return (
        <section>
            <h3>Наш подход к обучению</h3>

            <ul>
                {titles.map((title) => (
                    <WayToTeach key={title} title={title} />
                ))}
            </ul>
        </section>
    );
}