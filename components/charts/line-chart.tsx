import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

type props = {
    data: Array<{name: string, tmp: number}>}

export default function LineChartGraph({
    data
}:props) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
                <Tooltip />
                <Line type="monotone" dataKey="tmp" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}
