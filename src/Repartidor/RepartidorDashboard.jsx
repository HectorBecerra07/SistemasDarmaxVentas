import { useState, useEffect } from 'react';
import Mapa from './components/Mapa';
import PedidosAsignados from './components/PedidosAsignados';
import DetallePedido from './components/DetallePedido';

const RepartidorDashboard = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [driverPosition, setDriverPosition] = useState(null);
    const [error, setError] = useState(null);

    // Hardcoded driver ID for now
    const driverId = 'clwodad0s000008l4c1735z4a'; // Replace with actual driver ID from auth

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch(`/api/drivers/${driverId}/orders`);
                if (!response.ok) {
                    throw new Error('No se pudieron cargar los pedidos.');
                }
                const data = await response.json();
                // Placeholder for lat/lng
                const ordersWithCoords = data.map(order => ({
                    ...order,
                    delivery: {
                        ...order.delivery,
                        lat: 19.4326 + (Math.random() - 0.5) * 0.1, // Randomize around Mexico City
                        lng: -99.1332 + (Math.random() - 0.5) * 0.1,
                    }
                }))
                setOrders(ordersWithCoords);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchOrders();
    }, [driverId]);

    useEffect(() => {
        // Get driver's location
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setDriverPosition([latitude, longitude]);
                },
                (err) => {
                    console.error("Error getting location:", err);
                },
                {
                    enableHighAccuracy: true,
                }
            );
            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    const handleSelectOrder = (order) => {
        setSelectedOrder(order);
    };

    const handleUpdateOrder = async (orderId, updateData) => {
        try {
            const response = await fetch(`/api/orders/${orderId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updateData),
            });
            if (!response.ok) {
                throw new Error('Error al actualizar el pedido.');
            }
            const updatedOrder = await response.json();
            setOrders(prevOrders => prevOrders.filter(o => o.id !== orderId));
            setSelectedOrder(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex h-screen bg-light dark:bg-dark font-display text-text-light dark:text-text-dark">
            {/* Sidebar with Orders */}
            <aside className="w-1/3 max-w-sm p-4">
                <PedidosAsignados 
                    orders={orders} 
                    onSelectOrder={handleSelectOrder}
                    selectedOrderId={selectedOrder?.id}
                />
            </aside>

            {/* Main content */}
            <main className="flex-1 flex flex-col">
                <div className="flex-grow h-2/3 p-4">
                    <Mapa driverPosition={driverPosition} orders={orders} />
                </div>
                <div className="h-1/3 p-4">
                    <DetallePedido order={selectedOrder} onUpdateOrder={handleUpdateOrder} />
                </div>
            </main>

            {error && <div className="absolute bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg">{error}</div>}
        </div>
    );
};

export default RepartidorDashboard;
