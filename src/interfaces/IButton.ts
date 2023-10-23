export default interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
    width: string;
    radius: string;
    value: string;
    type: 'button' | 'reset' | 'submit';
}