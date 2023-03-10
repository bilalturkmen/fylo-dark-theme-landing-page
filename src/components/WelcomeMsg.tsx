interface WelProps {
  email: string;
  setStatus: any;
}

const WelcomeMsg = ({ email, setStatus }: WelProps) => {
  return (
    <p className="content--welcome">
      Welcome aboard {email} <i aria-hidden="true">🚢</i>
      <span>
        Please check your{" "}
        <a role="button" onClick={() => setStatus(false)}>
          inbox
        </a>
      </span>
    </p>
  );
};

export default WelcomeMsg;
