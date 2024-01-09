import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import ProfileForm from "./components/Profile/ProfileForm";
import MainNavigation from "./components/Layout/MainNavigation";
import HomePage from "./pages/HomePage";
import AuthForm from "./components/Auth/AuthForm";
import ExpenseContext from "./Store/ExpenseContext";

describe("Expense Tracker Component", () => {
  test("renders Money Spent as a test", () => {
    render(<ExpenseTracker />);
    const moneySpentElement = screen.getByText("Money Spent:");
    expect(moneySpentElement).toBeInTheDocument();
  });

  test("renders Description as a test", () => {
    render(<ExpenseTracker />);
    const descriptionElement = screen.getByText("Description:");
    expect(descriptionElement).toBeInTheDocument();
  });

  test("renders Category as a test", () => {
    render(<ExpenseTracker />);
    const categoryElement = screen.getByText("Category:");
    expect(categoryElement).toBeInTheDocument();
  });
});

describe("Profile Form Component", () => {
  test("renders Full Name as a test", () => {
    render(<ProfileForm />);
    const fullNameElement = screen.getByText("Full Name");
    expect(fullNameElement).toBeInTheDocument();
  });

  test("renders Profile Photot URL as a test", () => {
    render(<ProfileForm />);
    const profilePhotoElement = screen.getByText("Profile Photot URL");
    expect(profilePhotoElement).toBeInTheDocument();
  });

  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<ProfileForm />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});

describe("Main Navigation Component", () => {
  test("renders Expense Tracker Logo as a test", () => {
    render(<MainNavigation />);
    const expenseTrackerLogoElement = screen.getByText("Expense Tracker");
    expect(expenseTrackerLogoElement).toBeInTheDocument();
  });

  test("renders Download Expenses as a test", () => {
    render(<MainNavigation />);
    const downloadExpensesElement = screen.getByText("Download Expenses");
    expect(downloadExpensesElement).toBeInTheDocument();
  });

  test("renders Login as a test", () => {
    render(<MainNavigation />);
    const loginElement = screen.getByText("Login");
    expect(loginElement).toBeInTheDocument();
  });

  test("renders Profile as a test", () => {
    render(<MainNavigation />);
    const profileElement = screen.getByText("Profile");
    expect(profileElement).toBeInTheDocument();
  });

  test("renders Logout as a test", () => {
    render(<MainNavigation />);
    const logoutElement = screen.getByText("Logout");
    expect(logoutElement).toBeInTheDocument();
  });
});

describe("HomePage Component", () => {
  test('renders "Welcome to Expense Tracker" if user logged in', () => {
    render(<HomePage />);

    const outputElement = screen.getByText("Welcome to Expense Tracker!!!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Your profile is incomplete" if user logged in', () => {
    render(<HomePage />);

    const outputElement = screen.queryByText("Your profile is incomplete", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
});

describe("AuthForm Component", () => {
  test('renders "confirm Password" if user clicks Create new account', () => {
    render(<AuthForm />);

    const buttonElement = screen.getByRole("Create new account");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("confirm Password", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Forgot Password?" if user clicks Login', () => {
    render(<AuthForm />);

    const buttonElement = screen.getByRole("have an account? Login");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("Forgot Password?", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
});

describe("ExpenseContext Component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<ExpenseContext />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
