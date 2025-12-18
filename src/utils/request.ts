export default function request<T>(result: T): Promise<{ data: T }> {
  return new Promise<{ data: T }>((resolve) => 
    setTimeout(() => resolve({ data: result }), Math.random() * 1000),
  );
}