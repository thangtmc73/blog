function CTAButton({ disabled, text }) {
  return (
    <button
      className="bg-green dark:bg-green-d text-default-fg-d dark:text-default-fg mt-1 p-2 rounded-md"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default CTAButton;
