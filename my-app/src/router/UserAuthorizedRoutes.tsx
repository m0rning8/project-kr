import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactElement;
    requiredAuth?: boolean;
}

export const ProtectedUserRoute: React.FC<ProtectedRouteProps> = ({
                                                                      children,
                                                                      requiredAuth = false,
                                                                  }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("authToken");

            if (requiredAuth && token) {
                const isValid = await validateToken(token);
                setIsAuthenticated(isValid);
            } else if (!requiredAuth) {
                setIsAuthenticated(true);
            }

            setLoading(false);
        };

        checkAuth();
    }, [requiredAuth]);

    const validateToken = async (token: string): Promise<boolean> => {
        try {
            const response = await fetch("https://your-api.com/auth/validate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data.valid;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Помилка перевірки токена:", error);
            return false;
        }
    };


    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
