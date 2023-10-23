export default interface IForm {
    isError: boolean;
    from: string;
    tryAuth: (username: string, password: string) => void;
}