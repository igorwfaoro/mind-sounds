export abstract class StringHelper {

    public static short(value: string, size: number): string {
        return value.length > size ? `${value.slice(0, size - 3)}...` : value;
    }
}