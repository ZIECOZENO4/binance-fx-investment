
import Link from "next/link"

export function InvestNote() {
  return (
    <div className="py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 min-h-[600px] items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">FX COIN White Paper</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The future of decentralized finance. FX COIN is a next-generation cryptocurrency designed to provide fast,
              secure, and cost-effective transactions for users around the world. This white paper outlines the vision,
              technology, and ecosystem of FX COIN, highlighting its potential to revolutionize the financial industry.
            </p>
          </div>
        </div>
        <div className="prose max-w-none w-full mx-auto">
          <h2>Table of Contents</h2>
          <ul className="list-none p-0 m-0">
            <li>
              <Link href="#">1. Introduction</Link>
              <ul>
                <li>
                  <Link href="#">1.1. Problem Statement</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">2. Features and Benefits</Link>
            </li>
            <li>
              <Link href="#">3. Tokenomics</Link>
            </li>
            <li>
              <Link href="#">4. Roadmap</Link>
            </li>
            <li>
              <Link href="#">5. Team</Link>
            </li>
            <li>
              <Link href="#">6. Partnerships</Link>
            </li>
            <li>
              <Link href="#">7. Security</Link>
            </li>
            <li>
              <Link href="#">8. Community and Support</Link>
            </li>
            <li>
              <Link href="#">9. Conclusion</Link>
            </li>
          </ul>
          <h2 className="mt-8" id="introduction">
            1. Introduction
          </h2>
          <p>
            FX COIN is a cutting-edge cryptocurrency that aims to redefine the way value is transferred and stored in
            the digital age. Built on a foundation of innovation and security, FX COIN leverages the power of blockchain
            technology to provide a peer-to-peer payment system that is fast, efficient, and accessible to all.
          </p>
          <h3 className="mt-4" id="problem-statement">
            1.1. Problem Statement
          </h3>
          <p>
            The traditional financial system is plagued by inefficiencies, high costs, and barriers to access. Legacy
            payment networks are slow, often taking days to settle transactions, and are prone to outages and security
            vulnerabilities. In addition, the intermediaries involved in the current system, such as banks and payment
            processors, add layers of complexity and fees, making cross-border transactions especially cumbersome and
            expensive.
          </p>
          <h2 className="mt-8" id="features-and-benefits">
            2. Features and Benefits
          </h2>
          <p>
            FX COIN offers a range of features that differentiate it from traditional payment methods and other
            cryptocurrencies. These features include:
          </p>
          <ul>
            <li>Rapid Transactions: FX COIN transactions are near-instant,</li>
            <li>Scalability: The FX COIN network is designed to handle a high</li>
            <li>Security: FX COIN leverages advanced cryptographic techniques</li>
            <li>Low Fees: Users of FX COIN enjoy minimal transaction costs,</li>
            <li>Global Accessibility: FX COIN is available to anyone with an</li>
          </ul>
          <h2 className="mt-8" id="tokenomics">
            3. Tokenomics
          </h2>
          <p>
            The native token of the FX COIN ecosystem is the FXC token. The total supply of FXC tokens is capped at 1
            billion, with an initial distribution to early contributors, team members, and strategic partners. The FXC
            token serves multiple functions within the FX COIN ecosystem, including:
          </p>
          <ul>
            <li>Transaction Fees: Users who conduct transactions on the FX</li>
            <li>Staking: FXC token holders have the opportunity to stake their</li>
            <li>Governance: The FXC token enables community members to</li>
          </ul>
          <h2 className="mt-8" id="roadmap">
            4. Roadmap
          </h2>
          <p>
            The FX COIN team has ambitious plans to further develop and expand the capabilities of the platform. The
            following milestones are outlined in the FX COIN roadmap:
          </p>
          <ul>
            <li>Q3 2023: Launch of the FX COIN Mainnet</li>
            <li>Q4 2023: Integration with Decentralized Finance (DeFi)</li>
            <li>Q1 2024: Introduction of Cross-Chain Interoperability</li>
            <li>Q2 2024: Implementation of Smart Contract Functionality</li>
          </ul>
          <h2 className="mt-8" id="team">
            5. Team
          </h2>
          <p>
            The FX COIN team is composed of experienced professionals with backgrounds in blockchain technology,
            software development, finance, and marketing. The core team members are dedicated to realizing the vision of
            FX COIN and are committed to delivering a secure, user-friendly, and innovative platform.
          </p>
          <h2 className="mt-8" id="partnerships">
            6. Partnerships
          </h2>
          <p>
            FX COIN has established strategic partnerships with leading organizations in the blockchain and
            cryptocurrency space. These partnerships are instrumental in driving the adoption and integration of FX COIN
            across various use cases and industries.
          </p>
          <h2 className="mt-8" id="security">
            7. Security
          </h2>
          <p>
            FX COIN is committed to maintaining the highest standards of security and has implemented robust measures to
            protect the integrity of the platform. These security features include:
          </p>
          <ul>
            <li>Multi-Signature Wallets: The funds held by FX COIN are stored</li>
            <li>Regular Audits: The FX COIN smart contracts and codebase are</li>
            <li>Encryption: All communications and data transmission within</li>
          </ul>
          <h2 className="mt-8" id="community-and-support">
            8. Community and Support
          </h2>
          <p>
            The FX COIN community is a vibrant and engaged ecosystem of users, developers, and enthusiasts who are
            passionate about the potential of blockchain technology. Community members can participate in governance,
            propose and vote on ecosystem improvements, and contribute to the development of the platform.
          </p>
          <h2 className="mt-8" id="conclusion">
            9. Conclusion
          </h2>
          <p>
            FX COIN is poised to make a significant impact on the world of finance, offering a secure, efficient, and
            accessible platform for value transfer. With its innovative features, strong community support, and
            experienced team, FX COIN is well-positioned to realize its vision of democratizing finance and ushering in
            a new era of decentralized peer-to-peer transactions.
          </p>
        </div>
      </div>
    </div>
  )
}
