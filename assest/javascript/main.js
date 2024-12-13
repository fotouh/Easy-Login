// if (document.title === "Easy Login") {
//   localStorage.setItem("user", "a");
//   localStorage.setItem("pass", "a");
//   let user = window.prompt("User Name");
//   let pass = window.prompt("Password");

//   if (
//     user !== localStorage.getItem("user") &&
//     pass !== localStorage.getItem("pass")
//   ) {
//     document.body.remove();
//     window.alert("wrong User & Password");
//   }
// }

let mains = {
  Home: `<h1
        class="flex flex-col justify-center items-center text-white text-4xl py-10 font-bold"
      >
        Welcome to Easy Login 👋
      </h1>
      <div class="grid grid-cols-6 gap-4 w-11/12">
        <div class="grid col-span-4 pt-5 gap-4 bg-black p-4 rounded-lg">
          <h1 class="p-2 rounded-lg text-center text-white font-bold text-2xl">
            Vat For post
          </h1>
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Amount * 8%</th>
                <th>(Amount * 8% + Amount )* 14%</th>
                <th>Total</th>
                <th>After New Dev</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input id="PostVat" type="number" placeholder="Amount" />
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="grid col-span-2 pt-5 gap-4 bg-black p-4 rounded-lg">
          <h1 class="p-2 rounded-lg text-center text-white font-bold text-2xl">
            Vat For Pre
          </h1>
          <div class="flex gap-4">
            <div class="flex flex-col gap-3">
              <input
                class="p-2 rounded-lg"
                type="number"
                id="AfTaxes"
                placeholder="Amount After Taxes"
              />
              <div class="p-2 rounded-lg bg-white">Balance</div>
            </div>
            <div class="flex flex-col gap-3">
              <input
                class="p-2 rounded-lg"
                type="number"
                id="BefTaxes"
                placeholder="Balance"
              />
              <div class="p-2 rounded-lg bg-white">Amount After Taxes</div>
            </div>
          </div>
        </div>
        <div
          class="grid col-start-2 col-span-2 pt-5 gap-4 bg-black p-4 rounded-lg"
        >
          <h1 class="p-2 rounded-lg text-center text-white font-bold text-2xl">
            Calc Days
          </h1>
          <div class="flex flex-col gap-4">
            <div class="flex gap-3">
              <div class="p-2 rounded-lg bg-white">From</div>
              <input
                class="p-2 rounded-lg"
                type="date"
                id="Start"
                placeholder="Amount After Taxes"
              />
            </div>
            <div class="flex gap-3">
              <div class="p-2 rounded-lg bg-white">..To</div>
              <input
                class="p-2 rounded-lg"
                type="date"
                id="End"
                placeholder="Balance"
              />
            </div>
            <div id="TotalDays" class="p-2 rounded-lg bg-white">Total Days</div>
          </div>
        </div>
        <div class="grid pt-5 gap-4 bg-black p-4 rounded-lg">
          <h1 class="p-2 rounded-lg text-center text-white font-bold text-2xl">
            Amount Should Be Paid
          </h1>
          <div id="TotalMonths" class="p-2 rounded-lg bg-white"></div>
          <div class="p-2 rounded-lg bg-white">Le</div>
        </div>
      </div>`,
  SiebelGuide: `<h1 class="text-center text-white font-bold py-4 text-4xl">Siebel Guide
      </h1>

      <div class="flex w-full justify-center gap-2 items-center flex-wrap mb-8">

          <input
            class="rounded-xl p-4  flex justify-around position-sticky w-3/4"
            type="search"
            id="myInput"
            
            placeholder="Search By Request"
            aria-label="Search"
          />
        <ul class="flex gap-3 justify-between bg-black p-2 rounded-xl" id="SieList">
          <li class="text-white rounded-xl">
            <button
              class="p-2"
              type="button"
            >
              Fault
            </button>
          </li>
          <li class="text-white rounded-xl">
            <button
              class="p-2"
              type="button"
            >
              Request
            </button>
          </li>
          <li class="text-white rounded-xl">
            <button
              class="p-2"
              type="button"
            >
              Acc
            </button>
          </li>
        </ul>
      </div>
      <table class="hidden grid-cols-4 w-11/12" id="fault">
        <thead>
          <tr class="rounded-top-2">
            <th>Short Code</th>
            <th>Type</th>
            <th>Area</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>30851</td>
            <td>Fault For Billing</td>
            <td>Payment Within SLA</td>
            <td>
              In case amount not reflected while payment not exceeded the
              registration SLA, this SR should be created to be automated to
              credit team to add the dial on hold.
            </td>
          </tr>
          <tr>
            <td>30236</td>
            <td>Fault For Billing</td>
            <td>Annual Stamp Fees</td>
            <td>
              in case CS is complaining from annual stamp fees that he is
              charging
            </td>
          </tr>
          <tr>
            <td>30251</td>
            <td>Fault For Billing</td>
            <td>Bill Payment Problems</td>
            <td>
              in case CS is complaining that he can&#39;t pay his bills through
              Fawry , Massar , Bee .. Etc.
            </td>
          </tr>
          <tr>
            <td>30203</td>
            <td>Fault For Billing</td>
            <td>Budget Master</td>
            <td>
              in case CS is complaining from budget master service that he is
              charging
            </td>
          </tr>
          <tr>
            <td>30247</td>
            <td>Fault For Billing</td>
            <td>Local Calls Dispute</td>
            <td>
              in case CS is complaining from local calls that he is charging
            </td>
          </tr>
          <tr>
            <td>30220</td>
            <td>Fault For Billing</td>
            <td>Carried Over Minutes</td>
            <td>in case CS is complaining that his minutes not carried over</td>
          </tr>
          <tr>
            <td>30218</td>
            <td>Fault For Billing</td>
            <td>Claims Paid</td>
            <td>
              in case CS is complaining that he paid his bill &amp; that not
              reflected on system
            </td>
          </tr>
          <tr>
            <td>30228</td>
            <td>Fault For Billing</td>
            <td>Collect Claims Paid</td>
            <td>to be used from OCA team to collect payments from CS</td>
          </tr>
          <tr>
            <td>30835</td>
            <td>Fault For Billing</td>
            <td>Data Multi SIM Charge Dispute</td>
            <td>
              in case CS is complaining from charges related to data multi SIM
            </td>
          </tr>
          <tr>
            <td>30526</td>
            <td>Fault For Billing</td>
            <td>Data Roaming Dispute</td>
            <td>
              in case CS is complaining from data roaming charges , consumption
            </td>
          </tr>
          <tr>
            <td>30216</td>
            <td>Fault For Billing</td>
            <td>Direct Debit Deduction</td>
            <td>
              in case CS is complaining that his bills not deducted from direct
              debit
            </td>
          </tr>
          <tr>
            <td>30252</td>
            <td>Fault For Billing</td>
            <td>First Service Complaints</td>
            <td>in case CS is complaining from First service</td>
          </tr>
          <tr>
            <td>30245</td>
            <td>Fault For Billing</td>
            <td>High Unbilled Usage</td>
            <td>in case CS is complaining from high unbilled usage</td>
          </tr>
          <tr>
            <td>30845</td>
            <td>Fault For Billing</td>
            <td>Home 4G Early Renewal</td>
            <td>
              in case CS is complaining that he can&#39;t renew his home 4G
              early
            </td>
          </tr>
          <tr>
            <td>30844</td>
            <td>Fault For Billing</td>
            <td>Home 4G Router Banning</td>
            <td>in case CS is complaining from banning his home 4G</td>
          </tr>
          <tr>
            <td>30525</td>
            <td>Fault For Billing</td>
            <td>International Calls Dispute</td>
            <td>
              in case CS is complaining from international calls that he is
              charging
            </td>
          </tr>
          <tr>
            <td>30209</td>
            <td>Fault For Billing</td>
            <td>Itemized Bill Not Received</td>
            <td>
              in case CS is complaining that he didn&#39;t receive itemized bill
            </td>
          </tr>
          <tr>
            <td>30223</td>
            <td>Fault For Billing</td>
            <td>OCC Amount Dispute</td>
            <td>in case CS is complaining that OCC not added correctly</td>
          </tr>
          <tr>
            <td>30239</td>
            <td>Fault For Billing</td>
            <td>Remove Hold Bill</td>
            <td>in case CS complaining that his hold bill not removed</td>
          </tr>
          <tr>
            <td>30527</td>
            <td>Fault For Billing</td>
            <td>Roaming Calls Dispute</td>
            <td>
              in case CS is complaining from Roaming calls that he is charging
            </td>
          </tr>
          <tr>
            <td>30225</td>
            <td>Fault For Billing</td>
            <td>SMS Dispute</td>
            <td>in case CS is complaining from SMS that he is charging</td>
          </tr>
          <tr>
            <td>30848</td>
            <td>Fault For Billing</td>
            <td>Unleash Wrong Charges</td>
            <td>
              in case the CP is complaining from adding Extensions/Data
              buckets/Add-ons on the bill by the end-user through My Orange/USSD
              without CP request.
            </td>
          </tr>
          <tr>
            <td>30832</td>
            <td>Fault For Billing</td>
            <td>VAT Dispute</td>
            <td>
              in case CS is complaining from VAT that he is chagrining &quot;
              stamp - Vat -..etc.&quot;
            </td>
          </tr>
          <tr>
            <td>30847</td>
            <td>Fault For Billing</td>
            <td>Volte -Wrong charges</td>
            <td>in case CS is complaining from Volte service charges</td>
          </tr>
          <tr>
            <td>30224</td>
            <td>Fault For Billing</td>
            <td>Wrong Tariff Migration</td>
            <td>in case CS is complaining that he migrated to wrong tariff</td>
          </tr>
          <tr>
            <td>30849</td>
            <td>Fault For Billing</td>
            <td>Data Consumption Dispute</td>
            <td>in case CS is complaining from any data consumption issues</td>
          </tr>
          <tr>
            <td>30901</td>
            <td>Fault For Billing</td>
            <td>Data Charges</td>
            <td>
              in case CS is complaining from any data charges like bucket added
              wuthout request , high charges .. Etc
            </td>
          </tr>
          <tr>
            <td>30902</td>
            <td>Fault For Billing</td>
            <td>Vas Dispute</td>
            <td>in cas CS is complaining from Vas charges</td>
          </tr>
          <tr>
            <td>30852</td>
            <td>Fault For Billing</td>
            <td>Wrong Charges- Sudan</td>
            <td></td>
          </tr>
          <tr>
            <td>30903</td>
            <td>Fault For Billing</td>
            <td>Add-Ons Added Without Request</td>
            <td></td>
          </tr>
          <tr>
            <td>30242</td>
            <td>Fault For Billing</td>
            <td>Direct Debit SDF</td>
            <td></td>
          </tr>
          <tr>
            <td>30904</td>
            <td>Fault For Billing</td>
            <td>Home 4G Force Merge</td>
            <td></td>
          </tr>
          <tr>
            <td>30247</td>
            <td>Fault For Billing</td>
            <td>Local Calls Dispute</td>
            <td></td>
          </tr>
          <tr>
            <td>30850</td>
            <td>Fault For Billing</td>
            <td>Wrong Charges-Turkey &amp; Syria</td>
            <td></td>
          </tr>
          <tr>
            <td>30201</td>
            <td>Fault For Billing</td>
            <td>8000 Wrong Charges</td>
            <td></td>
          </tr>
          <tr>
            <td>30304</td>
            <td>Fault For Customer Care</td>
            <td>Delay In Mail Or Fax Request</td>
            <td>
              In case CS is complaining that he sent us through mail or Fax
              &amp; this request was delayed and not delivered
            </td>
          </tr>
          <tr>
            <td>30325</td>
            <td>Fault For Customer Care</td>
            <td>Angry Customer</td>
            <td>
              to be used in case CS was angry &amp; needs to transfer to shift
              leader
            </td>
          </tr>
          <tr>
            <td>30301</td>
            <td>Fault For Customer Care</td>
            <td>Attitude Problems</td>
            <td>to be used in case CS is complaining from agent attitude</td>
          </tr>
          <tr>
            <td>30327</td>
            <td>Fault For Customer Care</td>
            <td>Cant Reach</td>
            <td>to be used in case CS can&#39;t reach customer care</td>
          </tr>
          <tr>
            <td>30347</td>
            <td>Fault For Customer Care</td>
            <td>DOB Instant Compensation</td>
            <td>
              to be used in case CS needs to be compensated due to DOB services
            </td>
          </tr>
          <tr>
            <td>30310</td>
            <td>Fault For Customer Care</td>
            <td>Dropped Call At The Beginning</td>
            <td>
              to be used in case CS is complaining from dropped / Silent calls
              while he is calling CC
            </td>
          </tr>
          <tr>
            <td>30346</td>
            <td>Fault For Customer Care</td>
            <td>FC Instant Compensation</td>
            <td>to be used in case FC CS needs to be compensated</td>
          </tr>
          <tr>
            <td>30330</td>
            <td>Fault For Customer Care</td>
            <td>Instant Compensation</td>
            <td>to be used for instant compensation cases</td>
          </tr>
          <tr>
            <td>30326</td>
            <td>Fault For Customer Care</td>
            <td>Long Waiting Time</td>
            <td>
              to be used in case CS is complaining from long waiting time while
              he is reaching CC
            </td>
          </tr>
          <tr>
            <td>30321</td>
            <td>Fault For Customer Care</td>
            <td>Human Mistakes</td>
            <td>
              to be used in case CS is complaining that he received wrong info /
              action from CC
            </td>
          </tr>
          <tr>
            <td>30311</td>
            <td>Fault For Customer Care</td>
            <td>Dropped Call In The Middle</td>
            <td></td>
          </tr>
          <tr>
            <td>30312</td>
            <td>Fault For Customer Care</td>
            <td>Silent Call</td>
            <td></td>
          </tr>
          <tr>
            <td>30348</td>
            <td>Fault For Customer Care</td>
            <td>Data Revamp - Instant Comp.</td>
            <td></td>
          </tr>
          <tr>
            <td>30341</td>
            <td>Fault For Customer Care</td>
            <td>Refused Complaint Resolution</td>
            <td></td>
          </tr>
          <tr>
            <td>30348</td>
            <td>Fault For Customer Care</td>
            <td>Data Revamp - Retention</td>
            <td></td>
          </tr>
          <tr>
            <td>30516</td>
            <td>Fault For Data Services</td>
            <td>Features Problem</td>
            <td>
              in case CS is complaining from features problem related to his
              data bucket
            </td>
          </tr>
          <tr>
            <td>30449</td>
            <td>Fault For Data Services</td>
            <td>Orange Applications</td>
            <td>in case CS is complaining from website complaints</td>
          </tr>
          <tr>
            <td>30433</td>
            <td>Fault For Data Services</td>
            <td>Balance Used Not Updated-ABS</td>
            <td>
              in case CS is complaining that his balance not updated on ABS
            </td>
          </tr>
          <tr>
            <td>30427</td>
            <td>Fault For Data Services</td>
            <td>Buckets Renewal</td>
            <td>
              in case CS is complaining that his data bucket is not renewed
            </td>
          </tr>
          <tr>
            <td>30419</td>
            <td>Fault For Data Services</td>
            <td>Cannot Connect</td>
            <td>in case CS is complaining from data connection issue</td>
          </tr>
          <tr>
            <td>30440</td>
            <td>Fault For Data Services</td>
            <td>Cannot Delete</td>
            <td>
              in case CS is complaining that he can&#39;t delete his data bucket
            </td>
          </tr>
          <tr>
            <td>30441</td>
            <td>Fault For Data Services</td>
            <td>Cannot Migrate</td>
            <td>
              in case CS is complaining that he can&#39;t migrate to another
              data bucket
            </td>
          </tr>
          <tr>
            <td>30515</td>
            <td>Fault For Data Services</td>
            <td>Cannot Reset WI-FI Password</td>
            <td>
              in case CS is complaining that he can&#39;t reset Wi-Fi password
            </td>
          </tr>
          <tr>
            <td>30413</td>
            <td>Fault For Data Services</td>
            <td>Cannot Send And Receive</td>
            <td>
              in case CS is complaining that he can&#39;t send/receive MMS
            </td>
          </tr>
          <tr>
            <td>30439</td>
            <td>Fault For Data Services</td>
            <td>Cant Subscribe</td>
            <td>
              in case CS is complaining that he can&#39;t subscribe in data
              bucket
            </td>
          </tr>
          <tr>
            <td>30401</td>
            <td>Fault For Data Services</td>
            <td>CWS</td>
            <td>in case CS has problem with CWS service</td>
          </tr>
          <tr>
            <td>30437</td>
            <td>Fault For Data Services</td>
            <td>Data Roaming prob</td>
            <td>
              in case CS is complaining from data connection issue while roaming
            </td>
          </tr>
          <tr>
            <td>30512</td>
            <td>Fault For Data Services</td>
            <td>Forced Migration</td>
            <td>
              in case CS is complaining from forced migration to another data
              bucket
            </td>
          </tr>
          <tr>
            <td>30447</td>
            <td>Fault For Data Services</td>
            <td>Remaining Units</td>
            <td>
              in case CS is complaining that he can&#39;t check remaining MBs
            </td>
          </tr>
          <tr>
            <td>30405</td>
            <td>Fault For Data Services</td>
            <td>Slow Connection</td>
            <td>
              in case CS is complaining from slow connection while using data
            </td>
          </tr>
          <tr>
            <td>30517</td>
            <td>Fault For Data Services</td>
            <td>Cannot Delete-Self Channels</td>
            <td>
              in case CS cannot delete the data bucket through self channels
            </td>
          </tr>
          <tr>
            <td>30519</td>
            <td>Fault For Data Services</td>
            <td>Bucket Provisioning</td>
            <td></td>
          </tr>
          <tr>
            <td>30420</td>
            <td>Fault For Data Services</td>
            <td>Facetime/Imessage problem</td>
            <td></td>
          </tr>
          <tr>
            <td>30514</td>
            <td>Fault For Data Services</td>
            <td>Chunk Quota</td>
            <td></td>
          </tr>
          <tr>
            <td>30518</td>
            <td>Fault For Data Services</td>
            <td>Can&#39;t Modify ABS Settings</td>
            <td></td>
          </tr>
          <tr>
            <td>31660</td>
            <td>Fault For E-Shop</td>
            <td>Late Delivery</td>
            <td>
              in case CS is complaining from issues related to E-Shop &quot;
              late delivery , website problem .. Etc
            </td>
          </tr>
          <tr>
            <td>30506</td>
            <td>Fault For First Service</td>
            <td>Undelivered Hard Copy Only</td>
            <td>
              in case CS is complaining from that he doesn&#39;t receive Hard
              Copy
            </td>
          </tr>
          <tr>
            <td>30702</td>
            <td>Fault For IVR</td>
            <td>Balance Not Updated</td>
            <td>
              in case CS is complainig that his balance not updated on IVR
            </td>
          </tr>
          <tr>
            <td>30703</td>
            <td>Fault For IVR</td>
            <td>Cannot Call Short Numbers</td>
            <td>in case CS is complaining that he can&#39;t call IVR</td>
          </tr>
          <tr>
            <td>30716</td>
            <td>Fault For IVR</td>
            <td>Content Problem</td>
            <td>
              in case CS is complaining from IVR content like wrong message
            </td>
          </tr>
          <tr>
            <td>30712</td>
            <td>Fault For IVR</td>
            <td>PUK Not Updated</td>
            <td>in case CS is complaining that PUK not updated on IVR</td>
          </tr>
          <tr>
            <td>30825</td>
            <td>Fault For Line Modification</td>
            <td>Data Leakage</td>
            <td>
              to be used in case CS is complaining that someone is leaking his
              data
            </td>
          </tr>
          <tr>
            <td>30816</td>
            <td>Fault For Line Modification</td>
            <td>Dial Deact By Mistake</td>
            <td>to be used in case agent is deactivating dial by mistake</td>
          </tr>
          <tr>
            <td>30809</td>
            <td>Fault For Line Modification</td>
            <td>Migration Problem</td>
            <td>
              to be used in case CS is complaining from migration problem to
              needed tariff
            </td>
          </tr>
          <tr>
            <td>30823</td>
            <td>Fault For Line Modification</td>
            <td>Ownership Dispute/Denial</td>
            <td>
              to be used for cases/complaints related to ownership investigation
              and ownership disputes only.
            </td>
          </tr>
          <tr>
            <td>30824</td>
            <td>Fault For Line Modification</td>
            <td>Self Swap Problem</td>
            <td>
              to be used in case CS is complaining that he can&#39;t change SIM
              through his side
            </td>
          </tr>
          <tr>
            <td>30830</td>
            <td>Fault For Line Modification</td>
            <td>NTRA APP Wrong Customer’s Data</td>
            <td>in case CS is complaining from worng data on NTRA App</td>
          </tr>
          <tr>
            <td>30801</td>
            <td>Fault For Line Modification</td>
            <td>Data Re-Collection</td>
            <td></td>
          </tr>
          <tr>
            <td>30815</td>
            <td>Fault For Line Modification</td>
            <td>Data Registration Problem</td>
            <td></td>
          </tr>
          <tr>
            <td>30828</td>
            <td>Fault For Line Modification</td>
            <td>Postpaid Migration Problem</td>
            <td></td>
          </tr>
          <tr>
            <td>30810</td>
            <td>Fault For Line Modification</td>
            <td>Migration Daily Failed Report</td>
            <td></td>
          </tr>
          <tr>
            <td>30805</td>
            <td>Fault For Line Modification</td>
            <td>Data Line Info Registration</td>
            <td></td>
          </tr>
          <tr>
            <td>30806</td>
            <td>Fault For Line Modification</td>
            <td>Daily Failed Report</td>
            <td></td>
          </tr>
          <tr>
            <td>30813</td>
            <td>Fault For Line Modification</td>
            <td>Account Missing Data</td>
            <td></td>
          </tr>
          <tr>
            <td>30809</td>
            <td>Fault For Line Modification</td>
            <td>Migration Problem</td>
            <td></td>
          </tr>
          <tr>
            <td>31001</td>
            <td>Fault For Network Complaints</td>
            <td>ABC Problem</td>
            <td>
              in case CS is complaining from ABC problem in his area while
              making / receiving calls
            </td>
          </tr>
          <tr>
            <td>31026</td>
            <td>Fault For Network Complaints</td>
            <td>Bad Quality</td>
            <td>
              in case CS is complaining from bad quality in his area while
              making / receiving calls
            </td>
          </tr>
          <tr>
            <td>31005</td>
            <td>Fault For Network Complaints</td>
            <td>Cannot Make And Receive Call</td>
            <td>
              in case CS is complaining that he can&#39;t make / receive calls
              normally in his area
            </td>
          </tr>
          <tr>
            <td>31006</td>
            <td>Fault For Network Complaints</td>
            <td>Cannot Make Call</td>
            <td>
              in case CS is complaining that he can&#39;t make calls normally in
              his area
            </td>
          </tr>
          <tr>
            <td>31007</td>
            <td>Fault For Network Complaints</td>
            <td>Cannot Receive Call</td>
            <td>
              in case CS is complaining that he can&#39;t receive calls normally
              in his area
            </td>
          </tr>
          <tr>
            <td>31010</td>
            <td>Fault For Network Complaints</td>
            <td>Cross Call</td>
            <td>
              in case CS is complaining from cross calls in his area while
              making / receiving calls
            </td>
          </tr>
          <tr>
            <td>31025</td>
            <td>Fault For Network Complaints</td>
            <td>Dropped Call</td>
            <td>
              in case CS is complaining from dropped calls in his area while
              making / receiving calls
            </td>
          </tr>
          <tr>
            <td>31027</td>
            <td>Fault For Network Complaints</td>
            <td>No 4G Signal</td>
            <td>
              in case CS is complaining from that no 4G coverage in his area
            </td>
          </tr>
          <tr>
            <td>31014</td>
            <td>Fault For Network Complaints</td>
            <td>No Signal</td>
            <td>in case CS is complaining from that no signal in his area</td>
          </tr>
          <tr>
            <td>31016</td>
            <td>Fault For Network Complaints</td>
            <td>Prospect And Candidates</td>
            <td>in case CS needs to offer his place to build orange towers</td>
          </tr>
          <tr>
            <td>31017</td>
            <td>Fault For Network Complaints</td>
            <td>Silent Call</td>
            <td>
              in case CS is complaining from silent calls in his area while
              making / receiving calls
            </td>
          </tr>
          <tr>
            <td>31018</td>
            <td>Fault For Network Complaints</td>
            <td>Voice Echo</td>
            <td>
              in case CS is complaining from voice echo in his area while making
              / receiving calls
            </td>
          </tr>
          <tr>
            <td>33003</td>
            <td>Fault For Notifications</td>
            <td>Notification Problems</td>
            <td>
              in case CS is complaining from any notifications issues &quot;
              enormous notification , delay , not receiving .. Etc&quot;
            </td>
          </tr>
          <tr>
            <td>31249</td>
            <td>Fault For Offers</td>
            <td>Notifications Problem</td>
            <td>
              to be used in case CS is complaining from any notification
              problems related to offers &quot; can&#39;t receive , wrong
              notification .. Etc.&quot;
            </td>
          </tr>
          <tr>
            <td>31273</td>
            <td>Fault For Offers</td>
            <td>Cannot Redeem</td>
            <td>
              in case CS is complaining that he can&#39;t redeem his voucher ,
              points that he gets through Offers
            </td>
          </tr>
          <tr>
            <td>31208</td>
            <td>Fault For Offers</td>
            <td>Cant Subscribe</td>
            <td>
              in case CS is complaing that he can&#39;t subscribe in any offers
            </td>
          </tr>
          <tr>
            <td>31211</td>
            <td>Fault For Offers</td>
            <td>Cant Unsubscribe</td>
            <td>
              in case CS is complaing that he can&#39;t unsubscribe in any
              offers
            </td>
          </tr>
          <tr>
            <td>31218</td>
            <td>Fault For Offers</td>
            <td>Offer Dispute</td>
            <td>
              in case CS is complaining that he was charged for offer wrongfully
              or from his consumption for this offer
            </td>
          </tr>
          <tr>
            <td>31241</td>
            <td>Fault For Offers</td>
            <td>Offer Not Added</td>
            <td>
              in case CS is complaining that offer not added although he already
              is subscribed
            </td>
          </tr>
          <tr>
            <td>31246</td>
            <td>Fault For Offers</td>
            <td>Concert Tickets Reservation</td>
            <td></td>
          </tr>
          <tr>
            <td>31227</td>
            <td>Fault For Offers</td>
            <td>CARS Offers</td>
            <td></td>
          </tr>
          <tr>
            <td>31904</td>
            <td>Fault For Orange Data App</td>
            <td>Application Problem</td>
            <td>in case CS is complaining from applicarion issues</td>
          </tr>
          <tr>
            <td>31915</td>
            <td>Fault For Orange Data App</td>
            <td>Cannot Reset Password</td>
            <td>
              in case CS is complaining that he can&#39;t reset app password
            </td>
          </tr>
          <tr>
            <td>31916</td>
            <td>Fault For Orange Data App</td>
            <td>FC Virtual Card</td>
            <td>
              in case CS is complaining that FC virtual card not added on app
            </td>
          </tr>
          <tr>
            <td>31919</td>
            <td>Fault For Orange Data App</td>
            <td>Inaccurate Info</td>
            <td>in case CS is complaining from inaccurate info on app</td>
          </tr>
          <tr>
            <td>31910</td>
            <td>Fault For Orange Data App</td>
            <td>Orange Website Problem</td>
            <td>in case CS is complaining from website issues</td>
          </tr>
          <tr>
            <td>31364</td>
            <td>Fault For Products</td>
            <td>Add-Ons Not Added</td>
            <td>in case CS is complaining that Add-Ons not added</td>
          </tr>
          <tr>
            <td>31328</td>
            <td>Fault For Products</td>
            <td>Bucket Not Found On Siebel</td>
            <td>
              in case CS is complaining that his bucket not found on Siebel -
              Charging Details
            </td>
          </tr>
          <tr>
            <td>31335</td>
            <td>Fault For Products</td>
            <td>Cannot Make/ Receive Call</td>
            <td>
              in case CS is complaining that he can&#39;t make / receive calls
              every where
            </td>
          </tr>
          <tr>
            <td>31399</td>
            <td>Fault For Products</td>
            <td>Cant Add Extension</td>
            <td>
              in case CS is complaining that he can&#39;t add voice extension
            </td>
          </tr>
          <tr>
            <td>31397</td>
            <td>Fault For Products</td>
            <td>Cant Add Favorite Number</td>
            <td>
              in case CS is complaining that he can&#39;t add favorite number
            </td>
          </tr>
          <tr>
            <td>31400</td>
            <td>Fault For Products</td>
            <td>Carry Over Problem</td>
            <td>in case CS is complaining that his units not carrived over</td>
          </tr>
          <tr>
            <td>31601</td>
            <td>Fault For Products</td>
            <td>Features Problem</td>
            <td>in case CS is complaining from his tariff features problems</td>
          </tr>
          <tr>
            <td>31309</td>
            <td>Fault For Products</td>
            <td>DialNot Found-Charging Details</td>
            <td>
              in case CS is complaining that his dial is not found on Siebel -
              Charging details
            </td>
          </tr>
          <tr>
            <td>31363</td>
            <td>Fault For Products</td>
            <td>FB Quota Not Added</td>
            <td>in case CS is complaining that FB quota not added to him</td>
          </tr>
          <tr>
            <td>31607</td>
            <td>Fault For Products</td>
            <td>FC Membership Not Added</td>
            <td>in case CS is complaining that FC membership not added</td>
          </tr>
          <tr>
            <td>31382</td>
            <td>Fault For Products</td>
            <td>Inclusive Bucket Not Added</td>
            <td>
              in case CS is complaining that his inclusive bucket not added
              &quot; MINs , SMS , bouns credit .. Etc&quot;
            </td>
          </tr>
          <tr>
            <td>31604</td>
            <td>Fault For Products</td>
            <td>Installment Problem</td>
            <td>
              in case CS is complaining from issues related to his installment
            </td>
          </tr>
          <tr>
            <td>31375</td>
            <td>Fault For Products</td>
            <td>Life Cycle Problem</td>
            <td>
              in case CS is complaining that his line didn&#39;t pass life cycle
              &amp; deactivated
            </td>
          </tr>
          <tr>
            <td>31396</td>
            <td>Fault For Products</td>
            <td>Limit Not Added</td>
            <td>in case CS is complaining that his limit not added</td>
          </tr>
          <tr>
            <td>31334</td>
            <td>Fault For Products</td>
            <td>No Signal EveryWhere</td>
            <td>in case CS is complaining from no signal every where</td>
          </tr>
          <tr>
            <td>31316</td>
            <td>Fault For Products</td>
            <td>Recharging Problem</td>
            <td>
              in case CS is complaining that he can&#39;t recharge through
              Orange channels &quot; fawry , website .. Etc
            </td>
          </tr>
          <tr>
            <td>31623</td>
            <td>Fault For Products</td>
            <td>Region Bonus Wrong charges</td>
            <td>
              in case CS is complaining from wrong charges for region bonus
            </td>
          </tr>
          <tr>
            <td>31319</td>
            <td>Fault For Products</td>
            <td>Renewal</td>
            <td>
              in case CS is complaining that he can&#39;t renew his bucket
            </td>
          </tr>
          <tr>
            <td>31635</td>
            <td>Fault For Products</td>
            <td>Renewal Through Aggregators</td>
            <td>
              in case CS is complaining that he can&#39;t renew his bucket
              through aggregators
            </td>
          </tr>
          <tr>
            <td>31365</td>
            <td>Fault For Products</td>
            <td>Scratch Card Problem</td>
            <td>
              in case CS is complaining from Scratch card problem &quot; expired
              , damaged , locked..etc&quot;
            </td>
          </tr>
          <tr>
            <td>31633</td>
            <td>Fault For Products</td>
            <td>Sharing Units</td>
            <td>in case CS is complaining that he can&#39;t share his units</td>
          </tr>
          <tr>
            <td>31606</td>
            <td>Fault For Products</td>
            <td>Voucher Not Added</td>
            <td>in case CS is complaining that his voucher not added</td>
          </tr>
          <tr>
            <td>31631</td>
            <td>Fault For Products</td>
            <td>WhatsApp Wrong Charges</td>
            <td>in case CS is complaining from whatsapp wrong charges</td>
          </tr>
          <tr>
            <td>31636</td>
            <td>Fault For Products</td>
            <td>Cant Subscribe</td>
            <td>
              in case CS cant subscribe to add-ons(FREEmax-Star Control 20)
            </td>
          </tr>
          <tr>
            <td>31637</td>
            <td>Fault For Products</td>
            <td>Cant Unsubscribe</td>
            <td>
              in case CS cant un subscribe from add-ons(FREEmax-Star Control 20)
            </td>
          </tr>
          <tr>
            <td>31603</td>
            <td>Fault For Products</td>
            <td>Free Service Not Added Via EAI</td>
            <td></td>
          </tr>
          <tr>
            <td>31640</td>
            <td>Fault For Products</td>
            <td>Force Migration Back</td>
            <td></td>
          </tr>
          <tr>
            <td>31639</td>
            <td>Fault For Products</td>
            <td>Voucher Amount Change</td>
            <td></td>
          </tr>
          <tr>
            <td>31638</td>
            <td>Fault For Products</td>
            <td>Voucher Redemption Problems</td>
            <td></td>
          </tr>
          <tr>
            <td>31372</td>
            <td>Fault For Products</td>
            <td>Request For Maintenance</td>
            <td></td>
          </tr>
          <tr>
            <td>30607</td>
            <td>Fault For Sales Teams</td>
            <td>Angry Customer</td>
            <td>to be used in case CS was angry from sales agents</td>
          </tr>
          <tr>
            <td>30339</td>
            <td>Fault For Sales Teams</td>
            <td>Attitude Problems</td>
            <td>
              to be used in case CS is complaining from sales agent attitude
            </td>
          </tr>
          <tr>
            <td>30329</td>
            <td>Fault For Sales Teams</td>
            <td>New Selling Process</td>
            <td>
              to be used for Hot lined customers exceeding allowed dials are
              routed to shop to follow data cleansing handling this SR will be
              sent to customer information team customer’s data to any different
              dials.
            </td>
          </tr>
          <tr>
            <td>30606</td>
            <td>Fault For Sales Teams</td>
            <td>Instant Compensation</td>
            <td>
              to be used for instant compensation cases through sales agents
              side
            </td>
          </tr>
          <tr>
            <td>30610</td>
            <td>Fault For Sales Teams</td>
            <td>Routed To Another Shop</td>
            <td>
              to be used in case CS is complaining that he is routed to another
              shop to make his request
            </td>
          </tr>
          <tr>
            <td>30604</td>
            <td>Fault For Sales Teams</td>
            <td>Wrong Action</td>
            <td>
              to be used in case CS is complaining that he received wrong action
              from sales agents
            </td>
          </tr>
          <tr>
            <td>30605</td>
            <td>Fault For Sales Teams</td>
            <td>Wrong Info</td>
            <td>
              to be used in case CS is complaining that he received wrong info
              from sales agents
            </td>
          </tr>
          <tr>
            <td>30611</td>
            <td>Fault For Sales Teams</td>
            <td>Shop Visit</td>
            <td>in case CS is complaining from shop visit</td>
          </tr>
          <tr>
            <td>30318</td>
            <td>Fault For Sales Teams</td>
            <td>Retail System Support</td>
            <td></td>
          </tr>
          <tr>
            <td>30319</td>
            <td>Fault For Sales Teams</td>
            <td>OC Wallet Release Suspension</td>
            <td></td>
          </tr>
          <tr>
            <td>30317</td>
            <td>Fault For Sales Teams</td>
            <td>Pricing Problem</td>
            <td></td>
          </tr>
          <tr>
            <td>30320</td>
            <td>Fault For Sales Teams</td>
            <td>Offer Not Added</td>
            <td></td>
          </tr>
          <tr>
            <td>31564</td>
            <td>Fault For Special Program</td>
            <td>Accrue To Problem</td>
            <td>in case CS is complaining from accruing problem</td>
          </tr>
          <tr>
            <td>31504</td>
            <td>Fault For Special Program</td>
            <td>Different Tier</td>
            <td>in case CS is complaining from his tier</td>
          </tr>
          <tr>
            <td>31523</td>
            <td>Fault For Special Program</td>
            <td>EA- Loyalty Problem</td>
            <td>
              in case CS is complaining from points issue related to Egypt Air
            </td>
          </tr>
          <tr>
            <td>31531</td>
            <td>Fault For Special Program</td>
            <td>Enrolment Delay</td>
            <td>in case CS is complaining from enrollment delay</td>
          </tr>
          <tr>
            <td>31505</td>
            <td>Fault For Special Program</td>
            <td>Expired Points</td>
            <td>in case CS is complaining that his points are expired</td>
          </tr>
          <tr>
            <td>31524</td>
            <td>Fault For Special Program</td>
            <td>External Partners</td>
            <td>in case CS is complaining from external partners attitude</td>
          </tr>
          <tr>
            <td>31508</td>
            <td>Fault For Special Program</td>
            <td>IVR Problem</td>
            <td>in case CS is complaining from Special IVR</td>
          </tr>
          <tr>
            <td>31510</td>
            <td>Fault For Special Program</td>
            <td>Points Dispute</td>
            <td>in case CS is complaining from points that added to him</td>
          </tr>
          <tr>
            <td>31529</td>
            <td>Fault For Special Program</td>
            <td>Points Not Added</td>
            <td>in case CS is complaining that his points not added</td>
          </tr>
          <tr>
            <td>31545</td>
            <td>Fault For Special Program</td>
            <td>Points Transfer problem</td>
            <td>
              in case CS is complaining that he can&#39;t transfer his points
            </td>
          </tr>
          <tr>
            <td>31515</td>
            <td>Fault For Special Program</td>
            <td>Redemption Problem</td>
            <td>in case CS is complaining from redemption issues for points</td>
          </tr>
          <tr>
            <td>31512</td>
            <td>Fault For Special Program</td>
            <td>SMS Not Delivered</td>
            <td>
              in case CS is complaining that he didn&#39;t receive SMS related
              to expired points , voucher .. Etc
            </td>
          </tr>
          <tr>
            <td>31442</td>
            <td>Fault For VAS</td>
            <td>Action Not Done</td>
            <td>
              in case CS is complaining that actions not done through U-Control
            </td>
          </tr>
          <tr>
            <td>31463</td>
            <td>Fault For VAS</td>
            <td>Balance Not Updated</td>
            <td>
              in case CS is complaining that his balance not updated on USSD
            </td>
          </tr>
          <tr>
            <td>31428</td>
            <td>Fault For VAS</td>
            <td>Budget Master Complaints</td>
            <td>in case CS is complaining from budget master service</td>
          </tr>
          <tr>
            <td>31405</td>
            <td>Fault For VAS</td>
            <td>Cannot Access</td>
            <td>in case CS is complaining that he can&#39;t access USSD</td>
          </tr>
          <tr>
            <td>31406</td>
            <td>Fault For VAS</td>
            <td>Cannot Access Network</td>
            <td>
              in case CS is complaning that he can&#39;t access network while
              roaming
            </td>
          </tr>
          <tr>
            <td>31409</td>
            <td>Fault For VAS</td>
            <td>Cannot Make And Receive Call</td>
            <td>
              in case CS is complaning that he can&#39;t make/receive
              international or roaming calls
            </td>
          </tr>
          <tr>
            <td>31440</td>
            <td>Fault For VAS</td>
            <td>Cannot Send And Receive</td>
            <td>
              in case CS is complaining that he can&#39;t send/receive SMS
            </td>
          </tr>
          <tr>
            <td>31475</td>
            <td>Fault For VAS</td>
            <td>Cannot un-Subscribe</td>
            <td>
              in case CS is complaining that he can&#39;t unsubscribe from any
              services
            </td>
          </tr>
          <tr>
            <td>31473</td>
            <td>Fault For VAS</td>
            <td>Cant Subscribe</td>
            <td>
              in case CS is complaining that he can&#39;t subscribe in any
              services
            </td>
          </tr>
          <tr>
            <td>31487</td>
            <td>Fault For VAS</td>
            <td>Credit Not Added</td>
            <td>in case CS is complaining that Salefny credit not added</td>
          </tr>
          <tr>
            <td>31418</td>
            <td>Fault For VAS</td>
            <td>Credit Transfer</td>
            <td>in case CS is complaining that he can&#39;t transfer credit</td>
          </tr>
          <tr>
            <td>31462</td>
            <td>Fault For VAS</td>
            <td>Daily Failed Report</td>
            <td>to be used to check daily failed actions</td>
          </tr>
          <tr>
            <td>32023</td>
            <td>Fault For VAS</td>
            <td>Data Sharing</td>
            <td>in case CS is complaining that he can&#39;t share his MBs</td>
          </tr>
          <tr>
            <td>31402</td>
            <td>Fault For VAS</td>
            <td>E-Bill Problem</td>
            <td>in case CS is complaining from E-Bill</td>
          </tr>
          <tr>
            <td>32022</td>
            <td>Fault For VAS</td>
            <td>Entertainment Service</td>
            <td>
              in case CS is complaiing from entertainment services like jawwy ,
              watch it
            </td>
          </tr>
          <tr>
            <td>31502</td>
            <td>Fault For VAS</td>
            <td>Features Problem</td>
            <td>
              in case CS is complaining that he can&#39;t use corporate call
              tone features
            </td>
          </tr>
          <tr>
            <td>32024</td>
            <td>Fault For VAS</td>
            <td>International Allowance</td>
            <td>
              in case CS is complaining that he can&#39;t use allowed
              international limit
            </td>
          </tr>
          <tr>
            <td>31581</td>
            <td>Fault For VAS</td>
            <td>Lifetime Validity</td>
            <td>
              in case CS is complainig that he can&#39;t buy validity for his
              line
            </td>
          </tr>
          <tr>
            <td>31427</td>
            <td>Fault For VAS</td>
            <td>Not Working Commands</td>
            <td>
              in case CS is complaining that codes related to default services
              not working like call waiting , call forward
            </td>
          </tr>
          <tr>
            <td>32101</td>
            <td>Fault For VAS</td>
            <td>Orange Cash Merchant Complaint</td>
            <td>in case CS is complaining from merchant service</td>
          </tr>
          <tr>
            <td>31536</td>
            <td>Fault For VAS</td>
            <td>Renewal</td>
            <td>in case CS is complainig that his Add-Ons not renewed</td>
          </tr>
          <tr>
            <td>31506</td>
            <td>Fault For VAS</td>
            <td>USB Problems</td>
            <td>
              in case CS is complaining from USB problems for Bulk SMS SIM Based
            </td>
          </tr>
          <tr>
            <td>32025</td>
            <td>Fault For VAS</td>
            <td>VoLTE</td>
            <td>in case CS is complaining from Volte service</td>
          </tr>
          <tr>
            <td>31575</td>
            <td>Fault For VAS</td>
            <td>Bank Wallet Problem</td>
            <td>in case CS had issue with bank wallet</td>
          </tr>
          <tr>
            <td>32017</td>
            <td>Fault For VAS</td>
            <td>Delivery Issue</td>
            <td>
              in case CS is complainig from delivery issue for merchant service
            </td>
          </tr>
          <tr>
            <td>31541</td>
            <td>Fault For VAS</td>
            <td>Donation Payment</td>
            <td>
              in case CS had problem with donation payment through orange cash
            </td>
          </tr>
          <tr>
            <td>31583</td>
            <td>Fault For VAS</td>
            <td>Open Integration with Fawry</td>
            <td>
              in case CS is complaining that he can&#39;t open integration with
              fawry
            </td>
          </tr>
          <tr>
            <td>31492</td>
            <td>Fault For VAS</td>
            <td>Payment Problem</td>
            <td>
              in case CS is complaining that he can&#39;t pay through merchant
              service
            </td>
          </tr>
          <tr>
            <td>32009</td>
            <td>Fault For VAS</td>
            <td>QR Code Problem</td>
            <td>in case CS had problem with QR code for merchant service</td>
          </tr>
          <tr>
            <td>32016</td>
            <td>Fault For VAS</td>
            <td>Refund Problem</td>
            <td>
              in case CS is complaining that he had refund issue through
              merchant service
            </td>
          </tr>
          <tr>
            <td>31509</td>
            <td>Fault For VAS</td>
            <td>Tango Tool Problem</td>
            <td>
              in case POS is complaining that he had issue with tango tool
            </td>
          </tr>
          <tr>
            <td>32020</td>
            <td>Fault For VAS</td>
            <td>Terminated Wallets</td>
            <td>in case CS is complaining that he had terminated wallet</td>
          </tr>
          <tr>
            <td>32018</td>
            <td>Fault For VAS</td>
            <td>UPG - Reset Password</td>
            <td>
              in case POS is complaining that he can&#39;t reset UPG password
            </td>
          </tr>
          <tr>
            <td>32019</td>
            <td>Fault For VAS</td>
            <td>URL Not Received</td>
            <td>
              in case CS is complaining that he didn&#39;t receive URL for
              Virtual IVR
            </td>
          </tr>
          <tr>
            <td>31551</td>
            <td>Fault For VAS</td>
            <td>USSD #114# Problem</td>
            <td>in case CS is complaining from #114#</td>
          </tr>
          <tr>
            <td>32010</td>
            <td>Fault For VAS</td>
            <td>USSD Purchasing Problem</td>
            <td>in case CS ca&#39;t purchase through USSD</td>
          </tr>
          <tr>
            <td>31566</td>
            <td>Fault For VAS</td>
            <td>Wallet Status</td>
            <td>in case CS is complaining from his wallet status</td>
          </tr>
          <tr>
            <td>31503</td>
            <td>Fault For VAS</td>
            <td>Settings Problem</td>
            <td>in case CS is complaining from Bulk SMS setting problem</td>
          </tr>
          <tr>
            <td>32102</td>
            <td>Fault For VAS</td>
            <td>POS Failed Transaction</td>
            <td></td>
          </tr>
          <tr>
            <td>32103</td>
            <td>Fault For VAS</td>
            <td>POS Top Up Transaction</td>
            <td></td>
          </tr>
          <tr>
            <td>32104</td>
            <td>Fault For VAS</td>
            <td>Active Vas Recycled Dials</td>
            <td></td>
          </tr>
          <tr>
            <td>32021</td>
            <td>Fault For VAS</td>
            <td>Units OR MBs Not Added</td>
            <td></td>
          </tr>
          <tr>
            <td>31574</td>
            <td>Fault For VAS</td>
            <td>Retailer - Top Up</td>
            <td></td>
          </tr>
          <tr>
            <td>32105</td>
            <td>Fault For VAS</td>
            <td>M2M Management Tool</td>
            <td></td>
          </tr>
          <tr>
            <td>31441</td>
            <td>Fault For VAS</td>
            <td>Failed Or Pending Request</td>
            <td></td>
          </tr>
          <tr>
            <td>32106</td>
            <td>Fault For VAS</td>
            <td>UPG – Unblock</td>
            <td></td>
          </tr>
          <tr>
            <td>31550</td>
            <td>Fault For VAS</td>
            <td>SMS Delay While CI-CO</td>
            <td></td>
          </tr>
          <tr>
            <td>31706</td>
            <td>Fault For MNP</td>
            <td>Offer Not Added</td>
            <td>In case CS is asking about MNP offer not added</td>
          </tr>
          <tr>
            <td>31711</td>
            <td>Fault For MNP</td>
            <td>Port In-Payment Transactions</td>
            <td></td>
          </tr>
          <tr>
            <td>31712</td>
            <td>Fault For MNP</td>
            <td>Website Complaint</td>
            <td></td>
          </tr>
          <tr>
            <td>31708</td>
            <td>Fault For MNP</td>
            <td>Offer Dispute</td>
            <td></td>
          </tr>
          <tr>
            <td>31703</td>
            <td>Fault For MNP</td>
            <td>Dial Not Loaded On IN</td>
            <td></td>
          </tr>
          <tr>
            <td>31701</td>
            <td>Fault For MNP</td>
            <td>Line Activation Problem</td>
            <td></td>
          </tr>
          <tr>
            <td>31710</td>
            <td>Fault For MNP</td>
            <td>Port Out-Payment Transactions</td>
            <td></td>
          </tr>
          <tr>
            <td>31707</td>
            <td>Fault For MNP</td>
            <td>Cannot Make OR Receive Call</td>
            <td></td>
          </tr>
          <tr>
            <td>31704</td>
            <td>Fault For MNP</td>
            <td>Suspected Fraud</td>
            <td></td>
          </tr>
          <tr>
            <td>31709</td>
            <td>Fault For MNP</td>
            <td>NTRA Complaints</td>
            <td></td>
          </tr>
          <tr>
            <td>31705</td>
            <td>Fault For MNP</td>
            <td>Ported Out Without Request</td>
            <td></td>
          </tr>
          <tr>
            <td>31702</td>
            <td>Fault For MNP</td>
            <td>Failed No Request</td>
            <td></td>
          </tr>
          <tr>
            <td>31103</td>
            <td>Fault For New Line</td>
            <td>New Selling Process</td>
            <td></td>
          </tr>
          <tr>
            <td>31108</td>
            <td>Fault For New Line</td>
            <td>Line Delivery Issue</td>
            <td></td>
          </tr>
          <tr>
            <td>31109</td>
            <td>Fault For New Line</td>
            <td>Orange2Go Issues</td>
            <td></td>
          </tr>
          <tr>
            <td>31104</td>
            <td>Fault For New Line</td>
            <td>Line Activation Problem</td>
            <td></td>
          </tr>
          <tr>
            <td>31105</td>
            <td>Fault For New Line</td>
            <td>Failed Or Pending Request</td>
            <td></td>
          </tr>
          <tr>
            <td>31102</td>
            <td>Fault For New Line</td>
            <td>Wrong Customer’s Data</td>
            <td></td>
          </tr>
          <tr>
            <td>31107</td>
            <td>Fault For New Line</td>
            <td>Cant Receive Calls</td>
            <td></td>
          </tr>
          <tr>
            <td>31106</td>
            <td>Fault For New Line</td>
            <td>Data Registration Failure</td>
            <td></td>
          </tr>
          <tr>
            <td>3193</td>
            <td>Fault For Network Via Channel</td>
            <td>Cannot Make /Receive Call</td>
            <td></td>
          </tr>
          <tr>
            <td>3192</td>
            <td>Fault For Network Via Channel</td>
            <td>Bad Quality</td>
            <td></td>
          </tr>
          <tr>
            <td>3191</td>
            <td>Fault For Network Via Channel</td>
            <td>No Signal</td>
            <td></td>
          </tr>
          <tr>
            <td>34001</td>
            <td>Fault For NPS</td>
            <td>NPS Survey</td>
            <td></td>
          </tr>
          <tr>
            <td>4191</td>
            <td>Fault For Data Via Channel</td>
            <td>Cannot Connect</td>
            <td></td>
          </tr>
          <tr>
            <td>4192</td>
            <td>Fault For Data Via Channel</td>
            <td>Slow Connection</td>
          </tr>
        </tbody>
      </table>
      <table class="hidden grid-cols-4 w-11/12" id="request">
        <thead>
          <tr class="rounded-top-2">
            <th>Short Code</th>
            <th>Type</th>
            <th>Area</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>Billing And Usage</td>
            <td>Installments</td>
            <td>
              Customer Asking about any of our Installments Offers, Procedures
              OR In case of inquiries about the remaining installments related
              to devices
            </td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Billing And Usage</td>
            <td>Renewal</td>
            <td>Customer Asking About Tariff / Product Renewal</td>
          </tr>
          <tr>
            <td>1003</td>
            <td>Billing And Usage</td>
            <td>Payments</td>
            <td>
              Customer asking about any kind of payments related to Invoices
            </td>
          </tr>
          <tr>
            <td>1004</td>
            <td>Billing And Usage</td>
            <td>Bill Amount</td>
            <td>Customer asking about Bill Amount</td>
          </tr>
          <tr>
            <td>1005</td>
            <td>Billing And Usage</td>
            <td>Bill Cycle</td>
            <td>Customer asking about Bill Cycle</td>
          </tr>
          <tr>
            <td>1006</td>
            <td>Billing And Usage</td>
            <td>Due Amount</td>
            <td>Customer asking about Due Amount</td>
          </tr>
          <tr>
            <td>1007</td>
            <td>Billing And Usage</td>
            <td>Invoice details</td>
            <td>Customer asking about any details related to the Invoice</td>
          </tr>
          <tr>
            <td>1008</td>
            <td>Billing And Usage</td>
            <td>Usage Details</td>
            <td>
              Customer asking about Call Details &amp; Usage for Prepaid and
              Hybrid customers, also used for Lost credit
            </td>
          </tr>
          <tr>
            <td>1009</td>
            <td>Billing And Usage</td>
            <td>Deposit Refund</td>
            <td>Customer asking about Refunding Deposit</td>
          </tr>
          <tr>
            <td>1010</td>
            <td>Billing And Usage</td>
            <td>Reinstatement</td>
            <td>Customer asking about Reinstatement</td>
          </tr>
          <tr>
            <td>1011</td>
            <td>Billing And Usage</td>
            <td>Payment Methods</td>
            <td>Customer asking about How to pay and steps</td>
          </tr>
          <tr>
            <td>1012</td>
            <td>Billing And Usage</td>
            <td>Compensation</td>
            <td>
              Customer asking about his/her compensation (Amount, details, date
              of receiving it)
            </td>
          </tr>
          <tr>
            <td>1013</td>
            <td>Billing And Usage</td>
            <td>Charges</td>
            <td>
              Customer asking about any kind of charges amounts, such as (Call
              tone, DOB, ….etc.)
            </td>
          </tr>
          <tr>
            <td>1015</td>
            <td>Billing And Usage</td>
            <td>Roaming Charges</td>
            <td>Customer asking about how will be charged while Roaming</td>
          </tr>
          <tr>
            <td>1016</td>
            <td>Billing And Usage</td>
            <td>Taxes</td>
            <td>
              Customer asking about all kind of Taxes (VAT, New State
              Development Fees,…etc)
            </td>
          </tr>
          <tr>
            <td>1017</td>
            <td>Billing And Usage</td>
            <td>Transfer Of Payments</td>
            <td>
              Customer asking about how to Transfer payments (Steps,
              amount,….etc)
            </td>
          </tr>
          <tr>
            <td>1018</td>
            <td>Billing And Usage</td>
            <td>Data Volume &amp; Charges</td>
            <td>
              Customer asking about different volumes and charges for Data
              services &amp; buckets
            </td>
          </tr>
          <tr>
            <td>1019</td>
            <td>Billing And Usage</td>
            <td>Balance Inquiry</td>
            <td>
              Customer asking about his/her balance (Prepaid &amp; Hybrid
              customers)
            </td>
          </tr>
          <tr>
            <td>1020</td>
            <td>Billing And Usage</td>
            <td>Wright Off Amount</td>
            <td>Customer asking about Wright Off Amount</td>
          </tr>
          <tr>
            <td>1021</td>
            <td>Billing And Usage</td>
            <td>Fees And Documents</td>
            <td>
              Customer asking about any kind of needed documents or fees Related
              to Invoices
            </td>
          </tr>
          <tr>
            <td>1023</td>
            <td>Billing And Usage</td>
            <td>Call Rates</td>
            <td>Customer asking about International / Roaming Call Rates</td>
          </tr>
          <tr>
            <td>1024</td>
            <td>Billing And Usage</td>
            <td>Data Roaming Features</td>
            <td>
              Customer asking about any details regarding Data Roaming (Buckets,
              Charges, Countries,…..etc)
            </td>
          </tr>
          <tr>
            <td>1025</td>
            <td>Billing And Usage</td>
            <td>Bill Announcement On IVR</td>
            <td>
              to be used while CS is calling 110 or 250 to hear his due amounts
              instead of the normal IVR
            </td>
          </tr>
          <tr>
            <td>1026</td>
            <td>Billing And Usage</td>
            <td>Courtesy Call</td>
            <td>
              be used from Personal credit and collection side while contacting
              new activated dials to make sure New customer is aware with his
              tariff &amp; usage.
            </td>
          </tr>
          <tr>
            <td>1027</td>
            <td>Billing And Usage</td>
            <td>Renewal Through Aggregators</td>
            <td>
              to be used if CS asked about renewal his tariff through
              aggregators
            </td>
          </tr>
          <tr>
            <td>1028</td>
            <td>Billing And Usage</td>
            <td>Reinstatement Request</td>
            <td>to be used if CS asked to reinstate his line</td>
          </tr>
          <tr>
            <td>1029</td>
            <td>Billing And Usage</td>
            <td>Reinstatement-Contact</td>
            <td>to be used to contact CS to check his reinstatment request</td>
          </tr>
          <tr>
            <td>1030</td>
            <td>Billing And Usage</td>
            <td>Reinstatement Reqst thrgh Shop</td>
            <td>to be used if CS asked to reinstate his line through shop</td>
          </tr>
          <tr>
            <td>1601</td>
            <td>Polluting Calls</td>
            <td>Prank Call</td>
            <td>
              Harassment Calls (either customer receiving them or Call center
              Harassment)
            </td>
          </tr>
          <tr>
            <td>1602</td>
            <td>Polluting Calls</td>
            <td>Data Leakage</td>
            <td>
              Customer asking about any suspicions from personal data Leakage
            </td>
          </tr>
          <tr>
            <td>1603</td>
            <td>Polluting Calls</td>
            <td>Dropped Call</td>
            <td>when CS asked that his call with TP agents was dropped</td>
          </tr>
          <tr>
            <td>1604</td>
            <td>Polluting Calls</td>
            <td>Silent Call</td>
            <td>when CS asked that his call with TP agents was silent</td>
          </tr>
          <tr>
            <td>1605</td>
            <td>Polluting Calls</td>
            <td>Calls Recording</td>
            <td>when CS asked about recording his calls</td>
          </tr>
          <tr>
            <td>1401</td>
            <td>Request For Assistance</td>
            <td>Settings</td>
            <td>
              Customer asking for help regarding any device settings (mobile,
              Laptop,….etc.), Also to be used for ADM settings
            </td>
          </tr>
          <tr>
            <td>1801</td>
            <td>Request For Info Advertisement</td>
            <td>Self-Registration</td>
            <td>
              incase CS asking about self-registration for Orange Cash due to
              SMS campaign
            </td>
          </tr>
          <tr>
            <td>1118</td>
            <td>Request For Info Campaign</td>
            <td>Reset Location</td>
            <td>incase CS asking about reset location details</td>
          </tr>
          <tr>
            <td>1701</td>
            <td>Request For Info Campaign</td>
            <td>Network Status</td>
            <td>
              Used only for &quot;Network Status&quot; campaign for Commercial
              needs.
            </td>
          </tr>
          <tr>
            <td>1702</td>
            <td>Request For Info Campaign</td>
            <td>Virtual IVR Digital</td>
            <td>to be used in case CS asking about Virtual IVR Digital</td>
          </tr>
          <tr>
            <td>1703</td>
            <td>Request For Info Campaign</td>
            <td>Re-Connect Line</td>
            <td>
              in case CS asking about any info to reconnect his line due to
              receiving SMS Campaign
            </td>
          </tr>
          <tr>
            <td>1704</td>
            <td>Request For Info Campaign</td>
            <td>Wearing Masks</td>
            <td>
              in case asking if agents &amp; CS wearing masks while visiting
              Shops
            </td>
          </tr>
          <tr>
            <td>1705</td>
            <td>Request For Info Campaign</td>
            <td>Star Control Migration To</td>
            <td>
              incase CS asking about migration campaign from star control to
              Eagle 100
            </td>
          </tr>
          <tr>
            <td>1706</td>
            <td>Request For Info Campaign</td>
            <td>Testing Data Blockage</td>
            <td>to be used in testing campaign for the internet connection</td>
          </tr>
          <tr>
            <td>1707</td>
            <td>Request For Info Campaign</td>
            <td>Hot Survey</td>
            <td>
              to be used in case CS asked about hot survey call that he received
              after calling call center
            </td>
          </tr>
          <tr>
            <td>1708</td>
            <td>Request For Info Campaign</td>
            <td>Business Prepaid DG</td>
            <td>
              when CS asks about data gathering campaign for business prepaid
            </td>
          </tr>
          <tr>
            <td>1709</td>
            <td>Request For Info Campaign</td>
            <td>4G unlock SMS</td>
            <td>
              &quot;when CS asks about SMS campaigns related enabling 4G .
            </td>
          </tr>
          <tr>
            <td>1710</td>
            <td>Request For Info Campaign</td>
            <td>uSIM SMS</td>
            <td>&quot;when CS asks about SMS campaigns related to uSIM .</td>
          </tr>
          <tr>
            <td>1711</td>
            <td>Request For Info Campaign</td>
            <td>Bill Payment Via Credit Or SC</td>
            <td>
              &quot;when CS asks about SMS campaigns related to paying his bills
              through credit or SC
            </td>
          </tr>
          <tr>
            <td>1712</td>
            <td>Request For Info Campaign</td>
            <td>GPRS Addition &amp; Free GBs</td>
            <td>
              &quot;when CS asks about SMS campaigns related to GPRS addition
              &amp; free GBs
            </td>
          </tr>
          <tr>
            <td>1713</td>
            <td>Request For Info Campaign</td>
            <td>Silent Data Users</td>
            <td>
              &quot;when CS asks about SMS campaigns related to silent data
              users
            </td>
          </tr>

          <tr>
            <td>1714</td>
            <td>Request For Info Campaign</td>
            <td>Renewal Through Aggregators</td>
            <td>
              &quot;when CS asks about SMS campaigns related to renewal tariffs
              through aggregators.
            </td>
          </tr>
          <tr>
            <td>1351</td>
            <td>Request for Info Cont Channel</td>
            <td>Retail</td>
            <td>
              Customer asking about Retail (Address, Working hours,…..etc)
            </td>
          </tr>
          <tr>
            <td>1352</td>
            <td>Request for Info Cont Channel</td>
            <td>IVR</td>
            <td>
              Customer asking about IVR (Transfer Calls, IVR Details,….etc)
            </td>
          </tr>
          <tr>
            <td>1353</td>
            <td>Request for Info Cont Channel</td>
            <td>Contacts</td>
            <td>Customer asking about any other Contacts number</td>
          </tr>
          <tr>
            <td>1354</td>
            <td>Request for Info Cont Channel</td>
            <td>Request Status</td>
            <td>
              Customer asking about his Request Status, which sent via E Mail or
              Fax
            </td>
          </tr>
          <tr>
            <td>1355</td>
            <td>Request For Info Cont Channel</td>
            <td>Call Transfer</td>
            <td>Customer asked to be transferred (Call transfer)</td>
          </tr>
          <tr>
            <td>1356</td>
            <td>Request For Info Cont Channel</td>
            <td>Contact FC Customer</td>
            <td>
              to be used in case CS needs to contact with FC Customer Service
            </td>
          </tr>
          <tr>
            <td>1501</td>
            <td>Request For Info Contract</td>
            <td>Mobile Wallet Validation</td>
            <td>Orange Cash Wallet Validation</td>
          </tr>
          <tr>
            <td>1502</td>
            <td>Request For Info Contract</td>
            <td>Forms</td>
            <td>Customer asking about Forms</td>
          </tr>
          <tr>
            <td>1504</td>
            <td>Request For Info Contract</td>
            <td>End User Data</td>
            <td>Customer asking To add End user data (Corporate use)</td>
          </tr>
          <tr>
            <td>1505</td>
            <td>Request For Info Contract</td>
            <td>Contract &amp; Account Details</td>
            <td>Customer asking about contact &amp; any of account details</td>
          </tr>
          <tr>
            <td>1506</td>
            <td>Request For Info Contract</td>
            <td>Aramex OC Contract Delivery</td>
            <td>Customer asking about contract for Aramex OC delivery</td>
          </tr>
          <tr>
            <td>1507</td>
            <td>Request For Info Contract</td>
            <td>Contract Data Validation</td>
            <td>Customer asking about validation data contract</td>
          </tr>
          <tr>
            <td>1201</td>
            <td>Request For Info Data</td>
            <td>Data Bucket Management</td>
            <td>
              in case CS asking about any action/ features related to data
              bucket mangement &quot; addition / deletion / migration&quot;
            </td>
          </tr>
          <tr>
            <td>1202</td>
            <td>Request For Info Data</td>
            <td>Renewal</td>
            <td>
              Customer asking about how to Renewal Data buckets or any other
              Data Service
            </td>
          </tr>
          <tr>
            <td>1203</td>
            <td>Request For Info Data</td>
            <td>Data Cycle</td>
            <td>Customer asking about Data Cycle</td>
          </tr>
          <tr>
            <td>1205</td>
            <td>Request For Info Data</td>
            <td>Eligibility</td>
            <td>
              Customer asking about Data Buckets Eligibility for his/her account
            </td>
          </tr>
          <tr>
            <td>1206</td>
            <td>Request For Info Data</td>
            <td>Internet Speed</td>
            <td>Customer asking about Internet Speed</td>
          </tr>
          <tr>
            <td>1207</td>
            <td>Request For Info Data</td>
            <td>Features</td>
            <td>Customer asking about data buckets features</td>
          </tr>
          <tr>
            <td>1208</td>
            <td>Request For Info Data</td>
            <td>Smartphones Applications</td>
            <td>CS is asking about smartphones applications</td>
          </tr>
          <tr>
            <td>1209</td>
            <td>Request For Info Data</td>
            <td>Revamp</td>
            <td>CS is asking about data bucket revamp</td>
          </tr>
          <tr>
            <td>1451</td>
            <td>Request For Info Devices</td>
            <td>Availability</td>
            <td>
              Customer asking about the Availability of any Devices (Mobiles,
              Laptops,….etc)
            </td>
          </tr>
          <tr>
            <td>1452</td>
            <td>Request For Info Devices</td>
            <td>Features</td>
            <td>
              Customer asking about Device&#39;s Features (Available options
              &amp; any details regarding the device itself)
            </td>
          </tr>
          <tr>
            <td>1453</td>
            <td>Request For Info Devices</td>
            <td>Prices</td>
            <td>Customer asking about Device&#39;s Prices</td>
          </tr>
          <tr>
            <td>1251</td>
            <td>Request For Info Loyalty</td>
            <td>Gifts</td>
            <td>Customer asking about Special Program (Loyalty) Gifts</td>
          </tr>
          <tr>
            <td>1252</td>
            <td>Request For Info Loyalty</td>
            <td>Eligibility</td>
            <td>
              Customer asking about Special Program (Loyalty) Eligibility
              criteria, how to be Enrolled
            </td>
          </tr>
          <tr>
            <td>1253</td>
            <td>Request For Info Loyalty</td>
            <td>Points</td>
            <td>Customer asking about his/her number of points</td>
          </tr>
          <tr>
            <td>1254</td>
            <td>Request For Info Loyalty</td>
            <td>Options</td>
            <td>
              Customer asking about Loyalty options such as (Redemption, Points
              Transfer,…..etc)
            </td>
          </tr>
          <tr>
            <td>1255</td>
            <td>Request For Info Loyalty</td>
            <td>Transactions</td>
            <td>Customer Asking about Loyalty Transactions</td>
          </tr>
          <tr>
            <td>1256</td>
            <td>Request For Info Loyalty</td>
            <td>CP Delegation</td>
            <td>
              to be used by corporate teams in case CP asks about loyalty
              program for his accounts
            </td>
          </tr>
          <tr>
            <td>1653</td>
            <td>Request For Info Loyalty</td>
            <td>Change Points Validity</td>
            <td>
              to be used in case CS needs to change his points validity due to
              redemption issues
            </td>
          </tr>
          <tr>
            <td>1650</td>
            <td>Request For Info MNP</td>
            <td>Port In Opportunity</td>
            <td>Customer Asking about eligibility for Port In</td>
          </tr>
          <tr>
            <td>1651</td>
            <td>Request For Info MNP</td>
            <td>Port In Procedures</td>
            <td>Customer Asking about Port In details</td>
          </tr>
          <tr>
            <td>1652</td>
            <td>Request For Info MNP</td>
            <td>Port Out Procedures</td>
            <td>Customer asking about Port Out Details</td>
          </tr>
          <tr>
            <td>1654</td>
            <td>Request For Info MNP</td>
            <td>Welcome Call</td>
            <td>in case asking about welcome call after port in orange</td>
          </tr>
          <tr>
            <td>1655</td>
            <td>Request For Info MNP</td>
            <td>My Orange App Port IN</td>
            <td>When CS asks about how to port in through My Orange App</td>
          </tr>
          <tr>
            <td>1656</td>
            <td>Request For Info MNP</td>
            <td>Competitor Attack Call</td>
            <td>When CS asks about competitor attack call</td>
          </tr>
          <tr>
            <td>1301</td>
            <td>Request For Info Offers</td>
            <td>Details</td>
            <td>
              Customer asking about a certain offer &amp; Sub offer details like
              device installment
            </td>
          </tr>
          <tr>
            <td>1302</td>
            <td>Request For Info Offers</td>
            <td>Eligibility</td>
            <td>Customer asking about Offer Eligibility for his/her account</td>
          </tr>
          <tr>
            <td>1303</td>
            <td>Request For Info Offers</td>
            <td>Fees</td>
            <td>Customer asking about Offer Fees</td>
          </tr>
          <tr>
            <td>1304</td>
            <td>Request For Info Offers</td>
            <td>Subscription</td>
            <td>Customer Asking About how to Subscribe to a certain Offer</td>
          </tr>
          <tr>
            <td>1305</td>
            <td>Request For Info Offers</td>
            <td>Deletion</td>
            <td>Customer Asking About how to Delete to a certain Offer</td>
          </tr>
          <tr>
            <td>1151</td>
            <td>Request For Info Product</td>
            <td>Fees And Documents</td>
            <td>
              Customer asking about Fees And Documents related to Products
            </td>
          </tr>
          <tr>
            <td>1152</td>
            <td>Request for Info Product</td>
            <td>Scratch Card</td>
            <td>Customer asking about any details related to Scratch Cards</td>
          </tr>
          <tr>
            <td>1153</td>
            <td>Request For Info Product</td>
            <td>Reconnection</td>
            <td>Customer asking about the Re-connection steps and details</td>
          </tr>
          <tr>
            <td>1154</td>
            <td>Request for Info Product</td>
            <td>Validity</td>
            <td>Customer asking about Products Validity</td>
          </tr>
          <tr>
            <td>1155</td>
            <td>Request for Info Product</td>
            <td>Availability</td>
            <td>Customer Asking about Products Availability</td>
          </tr>
          <tr>
            <td>1156</td>
            <td>Request for Info Product</td>
            <td>Re-pricing</td>
            <td>
              Customer asking about the reason or details for Re-Pricing a
              certain Product
            </td>
          </tr>
          <tr>
            <td>1157</td>
            <td>Request for Info Product</td>
            <td>Features</td>
            <td>Customer asking about any Product details</td>
          </tr>
          <tr>
            <td>1751</td>
            <td>Request For Info Termination</td>
            <td>Fees And Documents</td>
            <td>
              Customer asking about Termination (steps, Documents, Fees,….etc)
            </td>
          </tr>
          <tr>
            <td>1051</td>
            <td>Request For Info VAS</td>
            <td>Service Menu</td>
            <td>Customer asking about any Menu within #100# Tree</td>
          </tr>
          <tr>
            <td>1052</td>
            <td>Request For Info VAS</td>
            <td>Credit Transfer</td>
            <td>Customer asking about Credit transfer steps</td>
          </tr>
          <tr>
            <td>1053</td>
            <td>Request For Info VAS</td>
            <td>Deposit Amount</td>
            <td>
              Customer asking about Deposit amount (International &amp;
              Roaming), or any other VAS if exists
            </td>
          </tr>
          <tr>
            <td>1054</td>
            <td>Request For Info VAS</td>
            <td>Features</td>
            <td>
              Customer asking about any VAS Features (options &amp; details)
            </td>
          </tr>
          <tr>
            <td>1055</td>
            <td>Request For Info VAS</td>
            <td>Repricing</td>
            <td>Customer asking about any VAS&#39;s Repricing</td>
          </tr>
          <tr>
            <td>1056</td>
            <td>Request For Info VAS</td>
            <td>Service Codes</td>
            <td>
              CS is asking about codes for any services like :Orange Cash /
              Block
            </td>
          </tr>
          <tr>
            <td>1057</td>
            <td>Request For Info VAS</td>
            <td>Service Status</td>
            <td>Customer asking about VAS status (Active, Inactive,….etc)</td>
          </tr>
          <tr>
            <td>1058</td>
            <td>Request For Info VAS</td>
            <td>Service Addition</td>
            <td>Customer asking about adding any VAS</td>
          </tr>
          <tr>
            <td>1060</td>
            <td>Request For Info VAS</td>
            <td>Recharging</td>
            <td>Customer asking about Recharging</td>
          </tr>
          <tr>
            <td>1061</td>
            <td>Request For Info VAS</td>
            <td>Non Orange Service</td>
            <td>
              For any kine of inquiries received but doesn’t belong to Orange
              Services (Other offers, Products,…etc.)
            </td>
          </tr>
          <tr>
            <td>1062</td>
            <td>Request For Info VAS</td>
            <td>Eligibility</td>
            <td>Customer asking about if he/she Eligible for a certain VAS</td>
          </tr>
          <tr>
            <td>1063</td>
            <td>Request For Info VAS</td>
            <td>Roaming Partners</td>
            <td>
              Customer asking about Orange Network operators while roaming
            </td>
          </tr>
          <tr>
            <td>1065</td>
            <td>Request For Info VAS</td>
            <td>Service Deletion</td>
            <td>Customer asking about VAS deletion</td>
          </tr>
          <tr>
            <td>1066</td>
            <td>Request For Info VAS</td>
            <td>Transactions</td>
            <td>
              Customer asking about transaction related to VAS (E-Topup, My
              Orange,…etc)
            </td>
          </tr>
          <tr>
            <td>1067</td>
            <td>Request For Info VAS</td>
            <td>Self-Registration</td>
            <td>incase CS asking about self-registration for Orange Cash</td>
          </tr>
          <tr>
            <td>1068</td>
            <td>Request For Info VAS</td>
            <td>Re-Connect Line</td>
            <td>in case CS asking about any info to reconnect his line</td>
          </tr>
          <tr>
            <td>1069</td>
            <td>Request For Info VAS</td>
            <td>Deduction Notification</td>
            <td>
              In case CS asked about notification that he received about
              deduction related to alerting services or DOB
            </td>
          </tr>
          <tr>
            <td>1101</td>
            <td>Request For Information</td>
            <td>Notifications</td>
            <td>
              Customer asking about a received Notification which sent from our
              side for dunning or any service like ( block , MCA .. etc)
            </td>
          </tr>
          <tr>
            <td>1102</td>
            <td>Request For Information</td>
            <td>Advertisement</td>
            <td>
              Customer asking about a received Advertisement which sent from our
              side
            </td>
          </tr>
          <tr>
            <td>1103</td>
            <td>Request For Information</td>
            <td>Campaign</td>
            <td>
              Customer asking about a received Campaign details which sent from
              our side
            </td>
          </tr>
          <tr>
            <td>1104</td>
            <td>Request For Information</td>
            <td>Migration Procedures</td>
            <td>
              Customer asking about any Migration steps, details, Fees &amp;
              Channels
            </td>
          </tr>
          <tr>
            <td>1106</td>
            <td>Request For Information</td>
            <td>Line Status</td>
            <td>
              Customer asking about his/her Line status (Active, SD,
              Suspended,….etc)
            </td>
          </tr>
          <tr>
            <td>1107</td>
            <td>Request For Information</td>
            <td>Article</td>
            <td>
              Customer asking about any article related to Orang within the
              Media Press
            </td>
          </tr>
          <tr>
            <td>1108</td>
            <td>Request For Information</td>
            <td>Customer Suggestions</td>
            <td>
              Customer Suggest any kind of new Service, Product,
              procedures,….etc.
            </td>
          </tr>
          <tr>
            <td>1109</td>
            <td>Request For Information</td>
            <td>Force Migration</td>
            <td>
              Customer asking about Force Migration (Reason, steps,
              benefits,….etc.)
            </td>
          </tr>
          <tr>
            <td>1110</td>
            <td>Request For Information</td>
            <td>Hold Migration</td>
            <td>Customer asking about how to Hold Migration action</td>
          </tr>
          <tr>
            <td>1112</td>
            <td>Request For Information</td>
            <td>Orange Applications</td>
            <td>
              in case CS asking about any of Orange Applications like my orange
              , .. Etc.
            </td>
          </tr>
          <tr>
            <td>1113</td>
            <td>Request For Information</td>
            <td>Features</td>
            <td>Customer asking about any information for E-shop</td>
          </tr>
          <tr>
            <td>1114</td>
            <td>Request For Information</td>
            <td>Blacklist checking</td>
            <td>To be used in case checking if CS in blacklist or not</td>
          </tr>
          <tr>
            <td>1115</td>
            <td>Request For Information</td>
            <td>Ministry Of Health</td>
            <td>
              to be used in case CS asking about Ministry of Health Initiatives
              for COVID 19
            </td>
          </tr>
          <tr>
            <td>1116</td>
            <td>Request For Information</td>
            <td>New Recharge Notification</td>
            <td>in case CS asking about new recharge notification</td>
          </tr>
          <tr>
            <td>1117</td>
            <td>Request For Information</td>
            <td>Reducing Bill Printing</td>
            <td>incase CS asking about why bill printing is reducing</td>
          </tr>
          <tr>
            <td>1119</td>
            <td>Request For Information</td>
            <td>Awareness Notification</td>
            <td>
              In case you received inquiries related to SMS campaign that CS
              received to increase his e-bill awareness
            </td>
          </tr>
          <tr>
            <td>1120</td>
            <td>Request For Information</td>
            <td>MNP Follow Up</td>
            <td>to be used by Upselling team to follow up new MNP process</td>
          </tr>
          <tr>
            <td>1121</td>
            <td>Request For Information</td>
            <td>Wallet Creation</td>
            <td>
              to be used in case CS asking about how to create wallet for Orange
              Cash
            </td>
          </tr>
          <tr>
            <td>1122</td>
            <td>Request For Information</td>
            <td>2nd ID Type</td>
            <td>
              When CS asks about 2nd ID type for verification to buy new line..
              Etc.
            </td>
          </tr>
          <tr>
            <td>1123</td>
            <td>Request For Information</td>
            <td>Consumer Protection Law</td>
            <td>
              When CS asks about any inquiries related to consumer protection
              low / rules
            </td>
          </tr>
          <tr>
            <td>1124</td>
            <td>Request For Information</td>
            <td>Change Dial</td>
            <td>Incase CS asking about change dial service.</td>
          </tr>
          <tr>
            <td>1125</td>
            <td>Request For Information</td>
            <td>NTRA Application</td>
            <td>In case CS is asking about NTRA application</td>
          </tr>
          <tr>
            <td>1126</td>
            <td>Request For Information</td>
            <td>Orange Vacancies</td>
            <td>in case CS is asking about vacancies related to orange</td>
          </tr>
          <tr>
            <td>1127</td>
            <td>Request For Information</td>
            <td>Hotline Reason</td>
            <td>in case CS is asking about reason for hot lining</td>
          </tr>
          <tr>
            <td>1128</td>
            <td>Request For Information</td>
            <td>Coverage</td>
            <td>in case CS is asking about network coverage for 3G / Usim</td>
          </tr>
          <tr>
            <td>1129</td>
            <td>Request For Information</td>
            <td>Orange Sponsorship Requests</td>
            <td>in case CS is asking about orange sponsorship requests</td>
          </tr>
          <tr>
            <td>1131</td>
            <td>Request For Information</td>
            <td>Ministry Of Supply Document</td>
            <td>
              in case CS is asking about line for ministry of supply document
            </td>
          </tr>
          <tr>
            <td>1132</td>
            <td>Request For Information</td>
            <td>Rebranding</td>
            <td>in case CS is asking about orange rebranding</td>
          </tr>
          <tr>
            <td>1133</td>
            <td>Request For Information</td>
            <td>Force Migration Back</td>
            <td>in case CS is asking about force migration back</td>
          </tr>
          <tr>
            <td>1134</td>
            <td>Request For Information</td>
            <td>NBE Contract Issues</td>
            <td>in case CS is asking about NBE contract issues</td>
          </tr>
          <tr>
            <td>1135</td>
            <td>Request For Information</td>
            <td>Changing Tariff</td>
            <td>in case CS is asking about changing tariff info</td>
          </tr>
        </tbody>
      </table>
      <table class="hidden grid-cols-4 w-11/12" id="acc">
        <thead>
          <tr class="rounded-top-2">
            <th>Short Code</th>
            <th>Type</th>
            <th>Area</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10101</td>
            <td>Acc Mod For Billing</td>
            <td>Add</td>
            <td>
              When the cust Want to pay the bills through his bank account
              without going to any of Orange Shopsused By Orange Shops And 2000
              Only
            </td>
          </tr>
          <tr>
            <td>10647</td>
            <td>Acc Mod For Line Modification</td>
            <td>Through CS</td>
            <td></td>
          </tr>
          <tr>
            <td>10667</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td></td>
          </tr>
          <tr>
            <td>10334</td>
            <td>Acc. Mod. For Data</td>
            <td>Reset Password</td>
            <td></td>
          </tr>
          <tr>
            <td>11212</td>
            <td>Acc Mod For VAS</td>
            <td>Bypass Reactivation</td>
            <td></td>
          </tr>
          <tr>
            <td>11206</td>
            <td>Acc Mod For VAS</td>
            <td>Add Later</td>
            <td></td>
          </tr>
          <tr>
            <td>11205</td>
            <td>Acc Mod For VAS</td>
            <td>Add Instant</td>
            <td></td>
          </tr>
          <tr>
            <td>11210</td>
            <td>Acc Modification For VAS</td>
            <td>Bulk deletion request</td>
            <td></td>
          </tr>
          <tr>
            <td>11212</td>
            <td>Acc Mod For VAS</td>
            <td>Bypass Reactivation</td>
            <td></td>
          </tr>
          <tr>
            <td>10233</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Eagle – 50% discount</td>
            <td></td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod for Offers</td>
            <td>Delete</td>
            <td></td>
          </tr>
          <tr>
            <td>11517</td>
            <td>Acc Mod For Line Modification</td>
            <td>Block Infotainment SMS ADs</td>
            <td>
              Block SMS campaigns sent to customers directly through external
              supplier
            </td>
          </tr>
          <tr>
            <td>10101</td>
            <td>Acc Mod For Billing</td>
            <td>Add</td>
            <td></td>
          </tr>
          <tr>
            <td>10101</td>
            <td>Acc Mod For Billing</td>
            <td>Add</td>
            <td>After upselling E-Bill</td>
          </tr>
          <tr>
            <td>10102</td>
            <td>Acc Mod For Billing</td>
            <td>Change Bill Cycle To 15th</td>
            <td>
              when the customer want to change the bill cycle to 15th of th
              month
            </td>
          </tr>
          <tr>
            <td>10103</td>
            <td>Acc Mod For Billing</td>
            <td>Change Bill Cycle To 1st</td>
            <td>
              when the customer want to Change Bill Cycle To 1st of th month
            </td>
          </tr>
          <tr>
            <td>10104</td>
            <td>Acc Mod For Billing</td>
            <td>Delete</td>
            <td></td>
          </tr>
          <tr>
            <td>10104</td>
            <td>Acc Mod For Billing</td>
            <td>Delete</td>
            <td>when the customer want to delete the direct debit</td>
          </tr>
          <tr>
            <td>10101</td>
            <td>Acc Mod For Billing</td>
            <td>Add</td>
            <td>when customer want to hold his bill</td>
          </tr>
          <tr>
            <td>10104</td>
            <td>Acc Mod For Billing</td>
            <td>delete</td>
            <td>
              when the customer want to remove his hold bill after upselling /
              explaining E-bill to the customer as an alternative
            </td>
          </tr>
          <tr>
            <td>10161</td>
            <td>Acc Mod For Billing</td>
            <td>SD Released Due System Error</td>
            <td>
              when agent release the SD due to a known/global delay in payment
              posting caused by system error/failure BSCS/ PGW are down
            </td>
          </tr>
          <tr>
            <td>10162</td>
            <td>Acc Mod For Billing</td>
            <td>Susp Released Due System Error</td>
            <td>
              when agent release the suspension due to a known/global delay in
              payment posting caused by system error/failure BSCS/ PGW are down
            </td>
          </tr>
          <tr>
            <td>10164</td>
            <td>Acc Mod For Billing</td>
            <td>Send breakdown via E-bill</td>
            <td>
              To be used upon receiving customer&#39;s request of receiving
              breakdown Via e-bill
            </td>
          </tr>
          <tr>
            <td>10168</td>
            <td>Acc Mod For Billing</td>
            <td>Hold Dunning</td>
            <td>
              to be used incase of putting the customer on hold of dunning due
              to a complaint
            </td>
          </tr>
          <tr>
            <td>10106</td>
            <td>Acc Mod For Billing</td>
            <td>I and R DOP Acc To Acc</td>
            <td>When customer wants to transfer I&amp;R DOP from Acc to Acc</td>
          </tr>
          <tr>
            <td>10107</td>
            <td>Acc Mod For Billing</td>
            <td>I and R DOP Post To Post</td>
            <td>When the customer Want To Pay I and R DOP Post To Post</td>
          </tr>
          <tr>
            <td>10108</td>
            <td>Acc Mod For Billing</td>
            <td>I and R DOP Refund</td>
            <td>
              when the customer want to refund his International And Roaming DOP
            </td>
          </tr>
          <tr>
            <td>10109</td>
            <td>Acc Mod For Billing</td>
            <td>Int DOP From Acc To Acc</td>
            <td>When customer wants to transfer Int DOP from Acc to Acc</td>
          </tr>
          <tr>
            <td>10110</td>
            <td>Acc Mod For Billing</td>
            <td>Int DOP Post To Post</td>
            <td>When The Customer Want To Pay Int DOP Post To Post</td>
          </tr>
          <tr>
            <td>10111</td>
            <td>Acc Mod For Billing</td>
            <td>Over Payment Post to Post</td>
            <td>When The Customer Want To Pay Over Payment Post to Post</td>
          </tr>
          <tr>
            <td>10113</td>
            <td>Acc Mod For Billing</td>
            <td>Payment Plan Agreement</td>
            <td>
              when the customer called asking to make promise and release his
              line
            </td>
          </tr>
          <tr>
            <td>10114</td>
            <td>Acc Mod For Billing</td>
            <td>Primo Refund By Cheque</td>
            <td>When The Customer Want To Refund By Cheque Primo</td>
          </tr>
          <tr>
            <td>10115</td>
            <td>Acc Mod For Billing</td>
            <td>Primo Refund Credit</td>
            <td>When The Customer Want To Refund By Credit Primo</td>
          </tr>
          <tr>
            <td>10116</td>
            <td>Acc Mod For Billing</td>
            <td>Refund By Cheque</td>
            <td>When The Customer Want To Refund By Cheque</td>
          </tr>
          <tr>
            <td>10117</td>
            <td>Acc Mod For Billing</td>
            <td>Refund Credit</td>
            <td>When The Customer Want To Refund By Credit</td>
          </tr>
          <tr>
            <td>10118</td>
            <td>Acc Mod For Billing</td>
            <td>Refund DOP Cash</td>
            <td>When The Customer Want To Refund DOP Cash</td>
          </tr>
          <tr>
            <td>10119</td>
            <td>Acc Mod For Billing</td>
            <td>Refund DOP Via MCC</td>
            <td>When The Customer Want To Refund DOP Via MCC used by Shop</td>
          </tr>
          <tr>
            <td>10120</td>
            <td>Acc Mod For Billing</td>
            <td>Refund International DOP</td>
            <td>When The Customer Want To Refund International DOP</td>
          </tr>
          <tr>
            <td>10121</td>
            <td>Acc Mod For Billing</td>
            <td>Refund MNP DOP Fees</td>
            <td>When The Customer Want To Refund MNP DOP Fees used by Shop</td>
          </tr>
          <tr>
            <td>10122</td>
            <td>Acc Mod For Billing</td>
            <td>Refund MNP Porting Fees</td>
            <td>
              When The Customer Want To Refund MNP Porting Fees used by Shop
            </td>
          </tr>
          <tr>
            <td>10123</td>
            <td>Acc Mod For Billing</td>
            <td>Refund Month in Advance</td>
            <td>When The Customer Want To Refund Month in Advance</td>
          </tr>
          <tr>
            <td>10126</td>
            <td>Acc Mod For Billing</td>
            <td>Roaming DOP AccTo Acc</td>
            <td>When The Customer Want To Pay Roaming DOP AccTo Acc</td>
          </tr>
          <tr>
            <td>10127</td>
            <td>Acc Mod For Billing</td>
            <td>Roaming DOP Post To Post</td>
            <td>When The Customer Want To Pay Roaming DOP Post To Post</td>
          </tr>
          <tr>
            <td>10128</td>
            <td>Acc Mod For Billing</td>
            <td>Roaming DOP Refund</td>
            <td>When The Customer Want To Refund His Roaming DOP</td>
          </tr>
          <tr>
            <td>10129</td>
            <td>Acc Mod For Billing</td>
            <td>Sales Taxes</td>
            <td>
              When Corp customer requests to remove the sales taxes for his
              account
            </td>
          </tr>
          <tr>
            <td>10130</td>
            <td>Acc Mod For Billing</td>
            <td>Send Bill Image</td>
            <td>when the customer request bill image to be sent to his fax</td>
          </tr>
          <tr>
            <td>10131</td>
            <td>Acc Mod For Billing</td>
            <td>Send Breakdown</td>
            <td>When The Customer Want To Send Breakdown</td>
          </tr>
          <tr>
            <td>10132</td>
            <td>Acc Mod For Billing</td>
            <td>Send Detailed Bill on Fax</td>
            <td>When The Customer Want To Send Detailed Bill on Fax</td>
          </tr>
          <tr>
            <td>10133</td>
            <td>Acc Mod For Billing</td>
            <td>Send Detailed Bill Via Courier</td>
            <td>When The Customer Want To Send Detailed Bill Via Courier</td>
          </tr>
          <tr>
            <td>10134</td>
            <td>Acc Mod For Billing</td>
            <td>Send Itemized Bill Via Courier</td>
            <td>When The Customer Want To Send Itemized Bill Via Courier</td>
          </tr>
          <tr>
            <td>10135</td>
            <td>Acc Mod For Billing</td>
            <td>Transfer of Payment</td>
            <td>When The Customer Want To Transfer of Payment</td>
          </tr>
          <tr>
            <td>10136</td>
            <td>Acc Mod For Billing</td>
            <td>Update Expiry Date</td>
            <td>when the customer want to update his direct debit</td>
          </tr>
          <tr>
            <td>10137</td>
            <td>Acc Mod For Billing</td>
            <td>Withholding Taxes</td>
            <td>When The Customer Want To Withholding Taxes</td>
          </tr>
          <tr>
            <td>10138</td>
            <td>Acc Mod For Billing</td>
            <td>Refund Via MCCs</td>
            <td>When The Customer Want To Refund Via MCCs used by Shop</td>
          </tr>
          <tr>
            <td>10139</td>
            <td>Acc Mod For Billing</td>
            <td>Release Soft Disconnection</td>
            <td>
              Done After Auto Release SLA (in case line was not released after
              passing auto release SLA)
            </td>
          </tr>
          <tr>
            <td>10139</td>
            <td>Acc Mod For Billing</td>
            <td>Release Soft Disconnection</td>
            <td>
              to be used in case the line was released within 1 hr from bill
              payment.
            </td>
          </tr>
          <tr>
            <td>10139</td>
            <td>Acc Mod For Billing</td>
            <td>Release Soft Disconnection</td>
            <td>
              when agent release the SD due to a known/global delay in payment
              posting caused by system error/failure BSCS/ PGW are down
            </td>
          </tr>
          <tr>
            <td>10140</td>
            <td>Acc Mod For Billing</td>
            <td>Release Suspesion</td>
            <td>
              When The Customer Want To Release Suspesion or When The Customer
              Want To Release Suspension &amp;Soft disconnection
            </td>
          </tr>
          <tr>
            <td>10141</td>
            <td>Acc Mod For Billing</td>
            <td>Change Language</td>
            <td>When The Customer Want To Change Bill Language</td>
          </tr>
          <tr>
            <td>10142</td>
            <td>Acc Mod For Billing</td>
            <td>Change Bill Cycle To 22nd</td>
            <td>
              When The Customer Want To Change Bill Cycle To 22nd used by
              Corporate
            </td>
          </tr>
          <tr>
            <td>10143</td>
            <td>Acc Mod For Billing</td>
            <td>Change Bill Cycle To 8th</td>
            <td>
              When The Customer Want To Change Bill Cycle To 8th used by
              Corporate
            </td>
          </tr>
          <tr>
            <td>10147</td>
            <td>Acc Mod For Billing</td>
            <td>Send Itemized Bill Via Fax</td>
            <td>When The Customer Want To Send Itemized Bill Via Fax</td>
          </tr>
          <tr>
            <td>10148</td>
            <td>Acc Mod For Billing</td>
            <td>Send Detailed Bill Via Email</td>
            <td>Used by Shop/Franchise agents</td>
          </tr>
          <tr>
            <td>10159</td>
            <td>Acc Mod For Billing</td>
            <td>Payment Agreement To Migrate</td>
            <td>
              for Migration from Star to Star control through CC cases Only
            </td>
          </tr>
          <tr>
            <td>10158</td>
            <td>Acc Mod For Billing</td>
            <td>FC Roaming Call Deduction</td>
            <td>for FC Roaming Call Deduction problems</td>
          </tr>
          <tr>
            <td>10157</td>
            <td>Acc Mod For Billing</td>
            <td>Send official payment doc</td>
            <td>When the customer asked for Bill Official document</td>
          </tr>
          <tr>
            <td>10151</td>
            <td>Acc Mod For Billing</td>
            <td>Reactivate</td>
            <td>
              when the customer want to reactivate the international after
              paying the due bills
            </td>
          </tr>
          <tr>
            <td>10151</td>
            <td>Acc Mod For Billing</td>
            <td>Reactivate</td>
            <td>
              when the customer want to reactivate the Roaming after paying the
              due bills
            </td>
          </tr>
          <tr>
            <td>10151</td>
            <td>Acc Mod For Billing</td>
            <td>Reactivate</td>
            <td>
              when the customer want to reactivate the international and Roaming
              after paying the due bills
            </td>
          </tr>
          <tr>
            <td>10155</td>
            <td>Acc Mod For Billing</td>
            <td>CS Call Refund while Roaming</td>
            <td>
              Customer called us due to SMS or VRS notifications received while
              abroad
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>for corp use only</td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              To be used In case of migration from any of the eligible tariffs
              to Select Business Control
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Star Smartphone
              150/250/350/Global 850 * For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Star Smartphone Global
              850 *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when receiving corporate customer requesting to change tariff
              agent should create below SR on corporate accounts/ dials *For
              corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              SR should be assigned to Personal Activation team or FC BO based
              on customer segment *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Automatic To Star
              Unlimited Orange-Light/Premium *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Automatic To Star
              Unlimited-Light *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Automatic To Star
              Unlimited-Premium *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To iPhone 2000 With OCC
              *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To iPhone 500 With OCC
              *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To iPhone1000 With OCC
              *For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To iPhone 500 *For
              corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To iPhone1000 *For
              corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To iPhone 2000 * For
              corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>Star Control 50/25/50</td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Star Smartphone 150 *
              For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Star Smartphone 250 *
              For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Star Smartphone 350 *
              For corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Star Global  850 *For
              corporate segments normally
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              when the customer want to change tariff To Star Talk
              30/100/200/250/300/500 from next bill cycle
            </td>
          </tr>
          <tr>
            <td>10201</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change To</td>
            <td>
              SR will be created automatically from EAI side to highlight if the
              customer is migrated or not to the Super daily profiles
            </td>
          </tr>
          <tr>
            <td>10213</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change By EAI</td>
            <td>
              Also in case of receiving an eligible customer request to change
              tariff to super daily bucket please use the below SR that will be
              automatically sent to EAI
            </td>
          </tr>
          <tr>
            <td>10219</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change From Star iPhone To</td>
            <td>
              when the customer want to change tariff To Star iPhone 89 169 299
              399
            </td>
          </tr>
          <tr>
            <td>10208</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change Through Franchise</td>
            <td>Therough Franchise Only</td>
          </tr>
          <tr>
            <td>10210</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Migration From Star Max 199 To</td>
            <td>Migration from Star Max 199</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              when the customer want to add Roaming Data BucketsInternet package
              / BB
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>in case the customer requests to add New Online portofolio</td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              in case the customer requests to migrate to New Online portofolio
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              in case the customer requests to Delete to New Online portofolio
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              in case the customer requests to add the MB transfer service
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>in case the customer requests to add the old Online 25</td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>in case the customer requests to Migrate the old Online 25</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              in case the customer requested to add data bucket and the agent
              took the action but it wasn’t done during the call
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td></td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>When customer ask to add Weekly MI Bucket</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>When customer ask to add an extension for Weekly MI Bucket</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>When customer ask to delete Weekly MI Bucket</td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>When customer ask to migrate Weekly MI Bucket</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              in case of adding data buckets related to Contractor’s internal
              lines
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>Corp Use only</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add New Unlimited Data Bucket12GB</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              For adding the APN and unlimited Mobile internet Medium on
              volubill
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              When adding Roaming data buckets on corporate segments automated
              to Support Team
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              When deleting Roaming data buckets on corporate segments automated
              to Support Team
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>Account modification for Deletion</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              In case the customer requests to delete one of the Online Extra
              Packages
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td></td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              in case the customer requests to delete the MB transfer service
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              For adding the APN and unlimited Mobile internet Premium on
              volubill
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              to be used in case of adding inclusive data bucket such as
              “unlimited 1 GB” for iPhone tariff
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              In case the customer requests to add one of the Online Extra
              Packages
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>For adding the APN and unlimited EGP 90 15 GB on volubill</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>For adding the APN and unlimited EGP 150 7 GB on volubill</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              For adding the related APN only on CX if customer having active
              eligible data bucket
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add 150 MB package</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add Extension Data package</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>When The Customer Want To Add Prepaid Black berry offer</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              when the customer want to add Unlimited Unlimited Data Bucket
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add Unlimited Mob Internet Light</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add Unlimited Mob Internet Medium</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              when the customer want to add Unlimited Mob Internet premium
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add 30 Hours Monthly Bucket</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add 60 Hours Monthly Bucket</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer want to add Extension Data Bucket</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              when the customer calling to Add 25 Giga premium &amp; it will be
              communicated to our customers as an offer
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer calling to Add3 Giga premium</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              when the customer calling to Add 15 Giga premium &amp; it will be
              communicated to our customers as an offer
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer calling to Add GPRS</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>when the customer calling to Add Online Monthly</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              to be used through the CC for deleting the bucket on the spot
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              When The Customer Want To delete Roaming Data BucketsBB
              Complete/Social daily/Social monthly/Email daily/Email monthly
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>Corp Use only</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              When The Customer Want To delete New Unlimited Data Bucket12GB
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>When The Customer Want To delete 150 MB</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>When The Customer Want To delete Blackberry BES</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>when the customer want to delete 30 Hours Monthly Bucket</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>when the customer want to delete 60 Hours Monthly Bucket</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>when the customer calling to Delete 25 Giga premium</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>when the customer calling to Delete3 Giga premium</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>when the customer calling to Delete 15 Giga premium</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>when the customer calling to Delete GPRS</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>when the customer calling to Delete Unlimited Data Bucket</td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              when the customer calling to Delete Unlimited Mob Internet Light
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              when the customer calling to Delete Unlimited Mob Internet Medium
            </td>
          </tr>
          <tr>
            <td>10302</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete</td>
            <td>
              when the customer calling to Delete Unlimited Mob Internet premium
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              When The Customer Want To upgrade/downgrade to one of the
              available data roaming buckets
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>Account modification for Migration</td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              When The Customer Want To Migrate to Roaming Data BucketsBB
              Complete/Social daily/Social monthly/Email daily/Email monthly
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              When The Customer Want To Migrate to New Unlimited Data Bucket12GB
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              When The Customer Want To Migrate to any Online Package /150 MB
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>When The Customer Want To Migrate Unlimited Data Bucket</td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              When The Customer Want To Migrate Unlimited Mob Internet Light
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              When The Customer Want To Migrate Unlimited Mob Internet Medium
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              When The Customer Want To Migrate Unlimited Mob Internet premium
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              when the customer want to migrate to 30 Hours Monthly Bucket
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              when the customer want to migrate to 60 Hours Monthly Bucket
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>
              when the customer want to migrate to Orange daily Internet Service
            </td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>When The Customer Want To Migrate to 15 Gega premium</td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>When The Customer Want To Migrate 25 Giga premium</td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td>When The Customer Want To Migrate 3 Giga premium</td>
          </tr>
          <tr>
            <td>10308</td>
            <td>Acc Mod For Data Services</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>10309</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>10308</td>
            <td>Acc Mod For Data Services</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>10309</td>
            <td>Acc Mod For Data Services</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>When the customer calling to Add Monthly Light 15MB</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>When the customer calling to Add Monthly Medium 50MB</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>When the customer calling to Add Monthly Premium 100MB</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>When the customer calling to Add Roaming Daily Bucket</td>
          </tr>
          <tr>
            <td>10319</td>
            <td>Acc Mod For Data Services</td>
            <td>Modify ABS Limit</td>
            <td>When the customer calling to Modify ABS Limit</td>
          </tr>
          <tr>
            <td>10319</td>
            <td>Acc Mod For Data Services</td>
            <td>Modify ABS Limit</td>
            <td>When the customer calling to Modify ABS Limit</td>
          </tr>
          <tr>
            <td>10320</td>
            <td>Acc Mod For Data Services</td>
            <td>Change ABS To Notify and Block</td>
            <td>When the customer calling to Change To Notify and Block ABS</td>
          </tr>
          <tr>
            <td>10320</td>
            <td>Acc Mod For Data Services</td>
            <td>Change ABS To Notify and Block</td>
            <td>When the customer calling to Change To Notify and Block ABS</td>
          </tr>
          <tr>
            <td>10321</td>
            <td>Acc Mod For Data Services</td>
            <td>Change ABS To Notify</td>
            <td>When the customer calling to Change To Notify ABS</td>
          </tr>
          <tr>
            <td>10321</td>
            <td>Acc Mod For Data Services</td>
            <td>Change ABS To Notify</td>
            <td>When the customer calling to Change To Notify ABS</td>
          </tr>
          <tr>
            <td>10171</td>
            <td>Acc Mod For Data Services</td>
            <td>Change Charging Behavior</td>
            <td>
              When the customer calling to Change charging behavior regarding
              Internet packages
            </td>
          </tr>
          <tr>
            <td>10325</td>
            <td>Acc Modification Orange Data App</td>
            <td>Portal Account Deletion</td>
            <td>for portal account deactivation</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>When the customer calling to Add &#39;Pay for my community</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>
              In case the customer requested to add one of the paid add-ons
            </td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>When the customer calling for call tone announcement block</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>When the customer calling to Add Call Forward Group</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>When the customer calling to AddCall waiting</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>When The Customer Want To Add MCA</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want delete &#39;Pay for my community</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want delete any of D.O.B services</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>
              To be used upon receiving customer’s request to delete the service
            </td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want delete call tone Azan</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>
              In case the customer requested to delete one of the paid add-ons
            </td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want deleteCall Tone Block</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want delete Alerting Service</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>When The Customer Want To Delete MCA</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>When the customer calling to DeleteCall Forward Group</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>When the customer calling to DeleteCall waiting</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>When the customer calling to DeleteAL KART Barring</td>
          </tr>
          <tr>
            <td>11189</td>
            <td>Acc Mod For VAS</td>
            <td>Contract Update For Release</td>
            <td>
              Releasing wallet suspension handling if suspended because of
              missing contract
            </td>
          </tr>
          <tr>
            <td>11198</td>
            <td>Acc Mod For VAS</td>
            <td>Add Announcement Block</td>
            <td>When the customer calling to Add Announcement Block</td>
          </tr>
          <tr>
            <td>10501</td>
            <td>Acc Mod For Group Share</td>
            <td>Activate</td>
            <td>When the customer calling to Activate used by FC</td>
          </tr>
          <tr>
            <td>10502</td>
            <td>Acc Mod For Group Share</td>
            <td>Grouping</td>
            <td>
              When The Customer Want To Reinstate Line used by Shop and
              franchise
            </td>
          </tr>
          <tr>
            <td>10504</td>
            <td>Acc Mod For Group Share</td>
            <td>Individual For Diff Customer</td>
            <td>
              used by sales for individualization for different customer
              requests
            </td>
          </tr>
          <tr>
            <td>10505</td>
            <td>Acc Mod For Group Share</td>
            <td>Force Grouping</td>
            <td>used for Grouping</td>
          </tr>
          <tr>
            <td>10511</td>
            <td>Acc Mod For Group Share</td>
            <td>Individualize Same Customer</td>
            <td>When the customer calling to Individualize used by FC</td>
          </tr>
          <tr>
            <td>10662</td>
            <td>Acc Mod For Line Modification</td>
            <td>Blocking SMS Ads</td>
            <td>when the customer who wants to delete the Ads SMSs</td>
          </tr>
          <tr>
            <td>10688</td>
            <td>Acc Mod For Line Modification</td>
            <td>Deactivate</td>
            <td>
              For service complement deactivation to be created on the master
              line
            </td>
          </tr>
          <tr>
            <td>10664</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection - Hotline</td>
            <td>
              created by 110 agents upon transferring the customer’s call to DG
              hunt: 2010 for data registration
            </td>
          </tr>
          <tr>
            <td>10669</td>
            <td>Acc Mod For Line Modification</td>
            <td>New Delegation Form</td>
            <td>
              AA or any entity requesting service or activation for an account
              via activation
            </td>
          </tr>
          <tr>
            <td>10601</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add Contact Person Data</td>
            <td>
              When The Customer Want To Add Contact Person Data used by Shop
            </td>
          </tr>
          <tr>
            <td>10602</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add Password</td>
            <td>
              When The Customer Want To Add Password For Verification used by
              Shop
            </td>
          </tr>
          <tr>
            <td>10603</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add User Name</td>
            <td>When The Customer Want To Add User Name</td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>To be used in case on normal changing SIM card to Nano SIM</td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>in case of changing the sim with Usim card</td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>
              To be used in case of changing SIM Card to emergency SIM Card
            </td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>To be used in case on normal changing SIM card to Micro SIM</td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>
              To be used If SIM Card was damaged physical damage wrong Puk code
              …etc
            </td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>
              To be used when changing SIM due to tech/ Network Problem “ex
              can’t send SMS …etc
            </td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>
              To be used in case changing Old SIM card to grant more capacity
            </td>
          </tr>
          <tr>
            <td>10604</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change</td>
            <td>
              if the cust wants to change his sim and his data due to Stolen or
              lost SIM
            </td>
          </tr>
          <tr>
            <td>10605</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Contact Person Data</td>
            <td>
              When The Customer Want To Change Contact Person Data used by Shop
            </td>
          </tr>
          <tr>
            <td>10606</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Free</td>
            <td>
              when the customer want to change his sim card for free used by FC
            </td>
          </tr>
          <tr>
            <td>10606</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Free</td>
            <td>in case of changing the sim with Usim card for free</td>
          </tr>
          <tr>
            <td>10607</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Of Ownership</td>
            <td>
              When any cust Want to change the ownership of the line to another
              one
            </td>
          </tr>
          <tr>
            <td>10608</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Password</td>
            <td>
              When The Customer Want To Change Password used For Verification
              used by Shop
            </td>
          </tr>
          <tr>
            <td>10609</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change User Name</td>
            <td>When The Customer Want To Change User Name used by Shop</td>
          </tr>
          <tr>
            <td>10610</td>
            <td>Acc Mod For Line Modification</td>
            <td>Delete Contact Person Data</td>
            <td>
              When The Customer Want To Delete Contact Person Data used by Shop
            </td>
          </tr>
          <tr>
            <td>10611</td>
            <td>Acc Mod For Line Modification</td>
            <td>Delete Password</td>
            <td>When The Customer Want To Delete Password</td>
          </tr>
          <tr>
            <td>10612</td>
            <td>Acc Mod For Line Modification</td>
            <td>Delete User Name</td>
            <td>When The Customer Want To Delete User Name</td>
          </tr>
          <tr>
            <td>10613</td>
            <td>Acc Mod For Line Modification</td>
            <td>Group and Ownership Transfer</td>
            <td>When The Customer Want To Make Group and Ownership Transfer</td>
          </tr>
          <tr>
            <td>10614</td>
            <td>Acc Mod For Line Modification</td>
            <td>Send</td>
            <td>When The Customer Want To Send Emergency Sim used by FC</td>
          </tr>
          <tr>
            <td>10615</td>
            <td>Acc Mod For Line Modification</td>
            <td>Send Free</td>
            <td>When The Customer Want To Send Free SIM Card used by FC</td>
          </tr>
          <tr>
            <td>10616</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Mailing address</td>
            <td>When The Customer Want To Change His Mailing address</td>
          </tr>
          <tr>
            <td>10617</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Dial Different IMSI</td>
            <td>When The Customer Want To Change His Dial used by Shop</td>
          </tr>
          <tr>
            <td>10618</td>
            <td>Acc Mod For Line Modification</td>
            <td>NTRA Deactivation Request</td>
            <td>
              To Be Created in Case NTRA Deactivation Request created
              automatically from EAI System
            </td>
          </tr>
          <tr>
            <td>10619</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection</td>
            <td>
              when there is no personal data already registered on customer’s
              dial on Siebel and marked with CSO flag
            </td>
          </tr>
          <tr>
            <td>10619</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection</td>
            <td>
              when there is a personal data already registered on customer’s
              dial on Siebel and marked with CSO flag
            </td>
          </tr>
          <tr>
            <td>10619</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection</td>
            <td>
              When The Customer Want To Register His Data and All Data Collected
            </td>
          </tr>
          <tr>
            <td>10619</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection</td>
            <td>
              When The Customer Want To Register His Data and there is missing
              Data
            </td>
          </tr>
          <tr>
            <td>10619</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection</td>
            <td>
              When The Customer Want To Register His Data and release his line
            </td>
          </tr>
          <tr>
            <td>10621</td>
            <td>Acc Mod For Line Modification</td>
            <td>Ownership Investigation</td>
            <td>used by Shop</td>
          </tr>
          <tr>
            <td>10623</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection Upselling</td>
            <td>
              when upsell to collect the customer data and done from the same
              dial
            </td>
          </tr>
          <tr>
            <td>10623</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection Upselling</td>
            <td>
              when upsell to collect the customer data and done from another
              dial
            </td>
          </tr>
          <tr>
            <td>10623</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection Upselling</td>
            <td>
              when upsell to collect the customer data and there is missing data
            </td>
          </tr>
          <tr>
            <td>10623</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collection Upselling</td>
            <td>
              when upsell to collect the customer data and Not Done Not Verified
            </td>
          </tr>
          <tr>
            <td>10624</td>
            <td>Acc Mod For Line Modification</td>
            <td>Modify Name</td>
            <td>used by CCR&#39;s when the customer want to Modify Name</td>
          </tr>
          <tr>
            <td>10625</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change ID</td>
            <td>used by CCR&#39;s when the customer want to Change ID</td>
          </tr>
          <tr>
            <td>10626</td>
            <td>Acc Mod For Line Modification</td>
            <td>Modify Birthdate</td>
            <td>
              used by CCR&#39;s when the customer want to Modify Birthdate
            </td>
          </tr>
          <tr>
            <td>10627</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Home Phone</td>
            <td>
              used by CCR&#39;s when the customer want to Change Home Phone
            </td>
          </tr>
          <tr>
            <td>10628</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add Home Phone</td>
            <td>used by CCR&#39;s when the customer want to Add Home Phone</td>
          </tr>
          <tr>
            <td>10629</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Work Phone</td>
            <td>
              used by CCR&#39;s when the customer want to Change Work Phone
            </td>
          </tr>
          <tr>
            <td>10630</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add Work Phone</td>
            <td>used by CCR&#39;s when the customer want to Add Work Phone</td>
          </tr>
          <tr>
            <td>10631</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change E-mail</td>
            <td>used by CCR&#39;s when the customer want to Change E-mail</td>
          </tr>
          <tr>
            <td>10632</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add E-mail</td>
            <td>used by CCR&#39;s when the customer want to Add E-mail</td>
          </tr>
          <tr>
            <td>10632</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add E-mail</td>
            <td>used by CCR&#39;s when the customer want to Add E-mail</td>
          </tr>
          <tr>
            <td>10633</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Fax #</td>
            <td>used by CCR&#39;s when the customer want to Change Fax #</td>
          </tr>
          <tr>
            <td>10634</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add Fax #</td>
            <td>used by CCR&#39;s when the customer want to Add Fax #</td>
          </tr>
          <tr>
            <td>10636</td>
            <td>Acc Mod For Line Modification</td>
            <td>Replace For Handicapped</td>
            <td>SIM Card replacement for Handicapped/old/med cases</td>
          </tr>
          <tr>
            <td>10639</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Collected</td>
            <td>
              Incase of receiving hot lined customers having data registered on
              Siebel
            </td>
          </tr>
          <tr>
            <td>10639</td>
            <td>Acc Mod For Line Modification</td>
            <td>Release</td>
            <td>
              In case there is data registered with CSO flag and this data not
              related to the customer
            </td>
          </tr>
          <tr>
            <td>10646</td>
            <td>Acc Mod For Line Modification</td>
            <td>Add End User Data</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>10645</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change End User Data</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>10650</td>
            <td>Acc Mod For Line Modification</td>
            <td>Ownership Data Registration</td>
            <td>
              Used in case customer passed his 48 hour from the ownership SR and
              we send SR to act team to add his data on siebel through act team
            </td>
          </tr>
          <tr>
            <td>10650</td>
            <td>Acc Mod For Line Modification</td>
            <td>Ownership Data Registration</td>
            <td>
              Used in case customer passed his 48 hour from the ownership SR and
              we send SR to act team to add his data on siebel through act team
            </td>
          </tr>
          <tr>
            <td>10658</td>
            <td>Acc Mod For Line Modification</td>
            <td>Release through DG CSO tool</td>
            <td></td>
          </tr>
          <tr>
            <td>10672</td>
            <td>Acc Mod For Line Modification</td>
            <td>Release NTRA Suspension</td>
            <td>
              Used upon releasing the suspension from the traffic light on BSCX
            </td>
          </tr>
          <tr>
            <td>10674</td>
            <td>Acc Mod For Line Modification</td>
            <td>Roaming Data BucketsDG-Foreigner Passport</td>
            <td>
              Used upon contacting call center for data validation SR will run
              to Data Gathering for verification
            </td>
          </tr>
          <tr>
            <td>10676</td>
            <td>Acc Mod For Line Modification</td>
            <td>Dataline DG-Foreigner Passport</td>
            <td>
              In case of technical issues occurred while validation with CSO
              tool SRs will be assigned to activation teams whether prepaid /
              Roaming Data Bucketsor internet control with SLA 1Hr
            </td>
          </tr>
          <tr>
            <td>10677</td>
            <td>Acc Mod For Line Modification</td>
            <td>Dataline DG-National ID</td>
            <td>
              2 In case of technical issues occurred while validation with CSO
              tool SRs will be assigned to activation teams whether prepaid /
              Roaming Data Bucketsor internet control with SLA 1Hr
            </td>
          </tr>
          <tr>
            <td>10675</td>
            <td>Acc Mod For Line Modification</td>
            <td>Roaming Data BucketsDG-National ID</td>
            <td>
              Used upon contacting call center for data validation SR will run
              to Data Gathering for verification
            </td>
          </tr>
          <tr>
            <td>10673</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Ownership Demo</td>
            <td>
              in case POS called to inquire / complaint that his MBB demo data
              &amp;/or status is changed
            </td>
          </tr>
          <tr>
            <td>10651</td>
            <td>Acc Mod For Line Modification</td>
            <td>IB Data Collection</td>
            <td>
              If there is data registered with CSO flag and this data not
              related to the customer
            </td>
          </tr>
          <tr>
            <td>10652</td>
            <td>Acc Mod For Line Modification</td>
            <td>Data Line Info Registration</td>
            <td>
              When The Customer Complaining From data registration through the
              web page
            </td>
          </tr>
          <tr>
            <td>10681</td>
            <td>Acc Mod For Line Modification</td>
            <td>Change Billing Data</td>
            <td>
              data fields are now available on BSCS for credit team use personal
              &amp; corporate These new fields will be used for data lines
              dunning actions from credit teams
            </td>
          </tr>
          <tr>
            <td>10689</td>
            <td>Acc Mod For Line Modification</td>
            <td>Cancel Slave line</td>
            <td>
              To deactivate one slave lines to be created on the slave line
            </td>
          </tr>
          <tr>
            <td>10683</td>
            <td>Acc Mod For Line Modification</td>
            <td>Migration SMS</td>
            <td>
              for Any Customer/CP requesting to stop/continue receiving this SMS
            </td>
          </tr>
          <tr>
            <td>10690</td>
            <td>Acc Mod For Line Modification</td>
            <td>Suspend Service</td>
            <td>
              To suspend the service for a while to be created on the master
              line
            </td>
          </tr>
          <tr>
            <td>10691</td>
            <td>Acc Mod For Line Modification</td>
            <td>Suspend Slave line</td>
            <td>To suspend one slave line to be created on the slave line</td>
          </tr>
          <tr>
            <td>10693</td>
            <td>Acc Mod For Line Modification</td>
            <td>Blocking 4G Via Whatsapp</td>
            <td></td>
          </tr>
          <tr>
            <td>10678</td>
            <td>Acc Mod For Line Modification</td>
            <td>Reactivation Due To ByPass</td>
            <td>
              When customer who had their dials deactivated wrongfully due to
              being suspected in bypass fraud
            </td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td>when the customer want to Migrate from Prepaid To</td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td>In case of Migration from Prepaid to Star limit</td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td>
              when the customer want to Migrate from Prepaid To Star 50 Limit
            </td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td>when the customer want to Migrate from Prepaid To</td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td>
              When The Customer Want To Reinstate Line used by Shop and
              franchise
            </td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td>In case of Migration from Primo to Star limit</td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td>
              when the customer want to Migrate from Primo to Star 50 limit
            </td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td>In case of Migration from Primo to Star 50 - limit</td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td>When the Custome Want To Migrate From Primo To Prepaid</td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td>When the Custome Want To Migrate From Corporate</td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td>
              When the Custome Want To Migrate From Corporate Call And Control
            </td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td>
              When The Customer Want To Reinstate Line used by Shop and
              franchise
            </td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td>
              When the Custome Want To Migrate From Star to Star Limit tariffs
            </td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td>
              when the customer want to migrate from Star To Prepaid used by MCC
            </td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td>when the customer want to migrate from Star To Primo</td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td>when the customer want to migrate from Star To Corporate</td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td>
              when the customer want to migrate from Star To Corporate Call And
              Control
            </td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td>
              when the customer want to migrate from Star To Star Control 20 /
              Star Control 50
            </td>
          </tr>
          <tr>
            <td>10707</td>
            <td>Acc Mod For Migration</td>
            <td>From Call And Control To</td>
            <td>
              When The Customer Want To Reinstate Line used by Shop and
              franchise
            </td>
          </tr>
          <tr>
            <td>10707</td>
            <td>Acc Mod For Migration</td>
            <td>From Call And Control To</td>
            <td>
              when the customer want to Migrate From Call And Control To Prepaid
            </td>
          </tr>
          <tr>
            <td>10708</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Standard To</td>
            <td>
              when the customer want to Migrate From Corp Standard To Prepaid
            </td>
          </tr>
          <tr>
            <td>10708</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Standard To</td>
            <td>
              when the customer want to Migrate From Corp Standard To Corporate
            </td>
          </tr>
          <tr>
            <td>10708</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Standard To</td>
            <td>
              when the customer want to Migrate From Corp Standard To Corporate
              Call And Control
            </td>
          </tr>
          <tr>
            <td>10709</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Call And Control To</td>
            <td>
              when the customer want to Migrate From Corp Call And Control To
              Prepaid
            </td>
          </tr>
          <tr>
            <td>10709</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Call And Control To</td>
            <td>
              when the customer want to Migrate From Corp Call And Control To
              Corporate
            </td>
          </tr>
          <tr>
            <td>10710</td>
            <td>Acc Mod For Migration</td>
            <td>From Main To</td>
            <td>when migrating from main to sub account</td>
          </tr>
          <tr>
            <td>10711</td>
            <td>Acc Mod For Migration</td>
            <td>From Sub To</td>
            <td>when migrating from subaccount to main account</td>
          </tr>
          <tr>
            <td>10712</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid Data To</td>
            <td></td>
          </tr>
          <tr>
            <td>10712</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid Data To</td>
            <td></td>
          </tr>
          <tr>
            <td>10713</td>
            <td>Acc Mod For Migration</td>
            <td>From Roaming Data BucketsData To</td>
            <td></td>
          </tr>
          <tr>
            <td>10713</td>
            <td>Acc Mod For Migration</td>
            <td>From Roaming Data BucketsData To</td>
            <td></td>
          </tr>
          <tr>
            <td>10713</td>
            <td>Acc Mod For Migration</td>
            <td>From Roaming Data BucketsData To</td>
            <td>
              SR to be assigned on personal activation team with normal SLA
            </td>
          </tr>
          <tr>
            <td>10722</td>
            <td>Acc Mod For Migration</td>
            <td>From Star Control To</td>
            <td>customers migrating from Star Control to Star 50-limit</td>
          </tr>
          <tr>
            <td>10722</td>
            <td>Acc Mod For Migration</td>
            <td>From Star Control To</td>
            <td>
              customers migrating from Star Control to Kalam EL Net Monthly
            </td>
          </tr>
          <tr>
            <td>10719</td>
            <td>Acc Mod For Migration</td>
            <td>Instant Mig From C&amp;C To</td>
            <td></td>
          </tr>
          <tr>
            <td>10726</td>
            <td>Acc Mod For Migration</td>
            <td>From Control To</td>
            <td>customers migrating from Control to Star 50-limit</td>
          </tr>
          <tr>
            <td>10726</td>
            <td>Acc Mod For Migration</td>
            <td>From Control To</td>
            <td>customers migrating from Control to Kalam EL Net Monthly</td>
          </tr>
          <tr>
            <td>10726</td>
            <td>Acc Mod For Migration</td>
            <td>From Control To</td>
            <td>customers migrating from Control to Control free profiles</td>
          </tr>
          <tr>
            <td>10745</td>
            <td>Acc Mod For Migration</td>
            <td>Kalam El Net To</td>
            <td>
              customers migrating from Kalam El Net to Control /Control free
              profiles
            </td>
          </tr>
          <tr>
            <td>10726</td>
            <td>Acc Mod For Migration</td>
            <td>From Control To</td>
            <td></td>
          </tr>
          <tr>
            <td>10728</td>
            <td>Acc Mod For Migration</td>
            <td>From Star Less Than 3 Month To</td>
            <td>
              In case Roaming Data BucketsCustomer with less than 3 months
              lifetime requested migration to prepaid
            </td>
          </tr>
          <tr>
            <td>10729</td>
            <td>Acc Mod For Migration</td>
            <td>Star Cont Less Than 3 Month To</td>
            <td>
              In case Star Control Customer with less than 3 months lifetime
              requested migration to prepaid
            </td>
          </tr>
          <tr>
            <td>10731</td>
            <td>Acc Mod For Migration</td>
            <td>From Control Free To</td>
            <td>Migration out from Control Free profiles To Control</td>
          </tr>
          <tr>
            <td>12101</td>
            <td>Acc Mod For MNP</td>
            <td>Port Out Potentially Accepted</td>
            <td>
              When The Customer Want To Port Out And Potentially Accepted used
              by MNP team
            </td>
          </tr>
          <tr>
            <td>12102</td>
            <td>Acc Mod For MNP</td>
            <td>Port Out Potentially Rejected</td>
            <td>
              When The Customer Want To Port Out And Potentially Rejected used
              by MNP team
            </td>
          </tr>
          <tr>
            <td>12103</td>
            <td>Acc Mod For MNP</td>
            <td>Port Out Manual check</td>
            <td>
              When The Customer Want To Port Out Manual check used by MNP team
            </td>
          </tr>
          <tr>
            <td>12104</td>
            <td>Acc Mod For MNP</td>
            <td>Port Out Accept to be canalled</td>
            <td>
              When The Customer Want To Port Out Accept to be canalled used by
              MNP team
            </td>
          </tr>
          <tr>
            <td>12105</td>
            <td>Acc Mod For MNP</td>
            <td>MNP cancellation and offer</td>
            <td>
              When The Customer Want To MNP cancellation and offer used by MNP
              team
            </td>
          </tr>
          <tr>
            <td>12106</td>
            <td>Acc Mod For MNP</td>
            <td>Port In</td>
            <td>Customer requests to Port in through MCCs/ Franchise</td>
          </tr>
          <tr>
            <td>12107</td>
            <td>Acc Mod For MNP</td>
            <td>Port In Refund Payment</td>
            <td>
              Used by CCRs to be used for MNP payment refund either upon Port
              In/ Port Out rejection or cancellation
            </td>
          </tr>
          <tr>
            <td>12108</td>
            <td>Acc Mod For MNP</td>
            <td>Port Out Refund Payment</td>
            <td>
              Used by CCRs to be used for MNP payment refund either upon Port
              In/ Port Out rejection or cancellation
            </td>
          </tr>
          <tr>
            <td>12110</td>
            <td>Acc Mod For MNP</td>
            <td>Dial Returned To Etisalat</td>
            <td>
              These SRs reflect that the deactivated ported-in dial has been
              returned to the donor operator either Vodafone or Etisalat
            </td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td>When The Customer Want To Activate Star Control 60</td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td>
              For service activation or lines addition to be created on the
              master line
            </td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td></td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td></td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td>for Corporate market use only</td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td>for Corporate market use only</td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td>When The Customer Want To Activate New Dial</td>
          </tr>
          <tr>
            <td>10801</td>
            <td>Acc Mod For New Line</td>
            <td>Activate</td>
            <td>When The Customer Want To Activate Modem No telephony 2</td>
          </tr>
          <tr>
            <td>10815</td>
            <td>Acc Mod For New Line</td>
            <td>CS Line Activation</td>
            <td>
              used by CS agents in case of receiving customer’s request to
              activate his/her new Prepaid line during CSO non working hours
            </td>
          </tr>
          <tr>
            <td>10818</td>
            <td>Acc Mod For New Line</td>
            <td>EAI Solution</td>
            <td>used only by Team leaders</td>
          </tr>
          <tr>
            <td>10811</td>
            <td>Acc Mod For New Line</td>
            <td>Activate For Foreigner</td>
            <td>
              This SR will be assigned automatically to EAI for line activation
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              in case customers calling 110 or visiting MCC to notify Orange
              that he has settled his bill and wants Consumer save team to add
              the offer or has considered and decided to accept Save team offer
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>In case customer asked to add the offer</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>In case of P&amp;G offer addition</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>In case of Orange Welcome points addition</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>In case of 110 callers rebranding gift addition</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              In case of 110 callers rebranding gift addition Roaming Data
              Buckets&amp; Star Control
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>In case of customer called after the offer time</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>In case of Orange Smartphone Offer addition</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              To be used for dials recommended to join FC by another FC
              membersSR will be assigned to FC BO teams
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              In case customer asked to add the offer SR will run automatically
              to add the offer through EAI
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              offer addition EAI will automatically create the SR &amp; close it
              with sub area Done Or Failed To Add memo
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              When The Customer Want To Add Data roaming re-pricing according to
              the bucket
            </td>
          </tr>
          <tr>
            <td>10943</td>
            <td>Acc Mod For Offers</td>
            <td>Free Line Voucher</td>
            <td>
              to be used by Sales team for customers who received gift line
            </td>
          </tr>
          <tr>
            <td>10946</td>
            <td>Acc Mod For Offers</td>
            <td>Resend Voucher’s SMS</td>
            <td>in case of resending voucher related to the offer</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              for customer requesting new free AL KART Line for permanent Deact
              Customers
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              When adding Roaming data buckets offer on corporate segments
              automated to Support Team
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              When adding Roaming data buckets offer on corporate segments
              automated to Support Team
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>used by Shop only</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              when the customer want to benefit from FC Mother’s day Promo
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              Shop rep will create it to activate “Free internet” bucket to the
              customer upon getting the Free USB modem
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>when the customer asking about Pretpaid BB Summer Promo</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              when the customer asking about Roaming Data BucketsBB Summer Promo
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              when the customer asking about Orange Internet Summer Festival
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>add Uncertified Handset Offer</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>add Uncertified Handset Offer</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              SR should be created by the shop rep and closed as Granted upon
              customer benefit from the offer
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              When The Customer Want To Add the offer I and R C and C Omra Promo
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>Nokia C3 mobile internet offer</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>When The Customer Want To Add I and R C and C Hajj Promo</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>When The Customer Want To Add AL KART Rec And Mig 2 Sehry</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              when the customer want to but validity upselling for 6 months
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>when the customer want to but validity upselling for 1 Year</td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              when the customer want to but validity upselling for 2 Years
            </td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>When The Customer Want To Add Kids Unlimited Offer</td>
          </tr>
          <tr>
            <td>10902</td>
            <td>Acc Mod For Offers</td>
            <td>Approve</td>
            <td>When The Customer Want Approval for Gold FC Group Share</td>
          </tr>
          <tr>
            <td>10902</td>
            <td>Acc Mod For Offers</td>
            <td>Approve</td>
            <td>
              SR related to FC exceptions for example in case the customer asked
              to send someone on behalf of him to change SIM card
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out C and C
              used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out FC Gold
              used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out Primo
              Offer used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Star Generic B
              used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out Star
              Generic round 1 used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out Star
              Generic round 2 used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out Star
              Moderate round 1 used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out Star
              Moderate round 2 used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out Star
              Premium round 1 used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out Star
              Premium round 2 used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add AL KART Basic
              offer used by MNP team
            </td>
          </tr>
          <tr>
            <td>10903</td>
            <td>Acc Mod For Offers</td>
            <td>Cancel Request and Add</td>
            <td>
              When The Customer Want To Cancel Request and Add Port Out AL KART
              Premium used by FC &amp; MNP Team
            </td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>When The Customer Want To Delete Data roaming re-pricing</td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>in case of P&amp;G offer Deletion</td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>In case of Orange Smartphone Offer deletion</td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>
              in case customer requested to unsub from Minute Winit, agent
              should inform him/her about the deletion steps &amp; proceed by
              deleting the service from alerting tool.
            </td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>
              When deleting Roaming data buckets offer on corporate segments
              automated to Support Team
            </td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>
              When deleting Roaming data buckets offer on corporate segments
              automated to Support Team
            </td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>When The Customer Want To Add I and R Standard Omra Promo</td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>When The Customer Want To Delete I and R AL KART Omra Promo</td>
          </tr>
          <tr>
            <td>10906</td>
            <td>Acc Mod For Offers</td>
            <td>Migrate From AL KART Basic to</td>
            <td>
              When The Customer Want To Migrate From AL KART Basic to Port In
              Premium and K205
            </td>
          </tr>
          <tr>
            <td>10911</td>
            <td>Acc Mod For Offers</td>
            <td>Modify</td>
            <td>
              When The Customer Want To Modify InternationalCalls Discount
            </td>
          </tr>
          <tr>
            <td>10918</td>
            <td>Acc Mod For Offers</td>
            <td>Add Through EAI</td>
            <td>Shop Only</td>
          </tr>
          <tr>
            <td>10918</td>
            <td>Acc Mod For Offers</td>
            <td>Add Through EAI</td>
            <td>Smart Phone Mobile Internet Bucket</td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>when customer requesting to reset PW of IVR 900</td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>when customer requesting to reset Orange money</td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>
              To be used in case the customer is calling from Different dial
            </td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>
              In case the customer is calling from the same dial but not
              verified
            </td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>When Customer request to reset 400 IVR Password</td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>when the customer want to reset 110 password</td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>when the customer want to reset 210 password</td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>when the custome want to reset the call barring password</td>
          </tr>
          <tr>
            <td>11001</td>
            <td>Acc Mod For Passwords Counters</td>
            <td>Reset</td>
            <td>
              when the customer want to reset the voice mail forwarding password
            </td>
          </tr>
          <tr>
            <td>11173</td>
            <td>Acc Mod For VAS</td>
            <td>Release-Second Line</td>
            <td>when the customer want to Release-Second Line</td>
          </tr>
          <tr>
            <td>11174</td>
            <td>Acc Mod For VAS</td>
            <td>P2P Cancellation</td>
            <td>Peer to Peer Cancelation</td>
          </tr>
          <tr>
            <td>11178</td>
            <td>Acc Mod For VAS</td>
            <td>Blocking Mobile Ads</td>
            <td>
              In case a customer called Orange call centers to block receiving
              Mobiles ads SMSs from a specific company / Shop
            </td>
          </tr>
          <tr>
            <td>11179</td>
            <td>Acc Mod For VAS</td>
            <td>Suspend Bulk SMS</td>
            <td>
              in case any CP requested to suspend “Web/Transactional Bulk SMS”
              line
            </td>
          </tr>
          <tr>
            <td>11172</td>
            <td>Acc Mod For VAS</td>
            <td>Suspend-Second Line</td>
            <td>when the customer want to Suspend-Second Line</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Second Line</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to SMS Bucket Star Control</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>
              when customer request to add Black list or white list number to
              hisher service
            </td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Block</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>
              CSR should inform customer that his/ her request will be
              implemented within 1 hour and s/he will be notified by SMS
            </td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when customer calling to activate the Mobile Adv Service</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when AL KART customer calling to activate the voice mail</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Clip Plus</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Clip Plus 2</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Conference Caling</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Itemized Bill</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Fax and Data</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Fax Services</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Free Number</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add International</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add International And Roaming</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Link Dot Net</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add SMS Bill Advice</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td>when the customer want to Add Roaming</td>
          </tr>
          <tr>
            <td>11104</td>
            <td>Acc Mod For VAS</td>
            <td>Add Free</td>
            <td>When The Customer Want To Add Free International</td>
          </tr>
          <tr>
            <td>11104</td>
            <td>Acc Mod For VAS</td>
            <td>Add Free</td>
            <td>When The Customer Want To Add Free Roaming</td>
          </tr>
          <tr>
            <td>11104</td>
            <td>Acc Mod For VAS</td>
            <td>Add Free</td>
            <td>
              When The Customer Want To Add Free International And Roaming
            </td>
          </tr>
          <tr>
            <td>11105</td>
            <td>Acc Mod For VAS</td>
            <td>Add Free For Platinum FC</td>
            <td>
              When The Customer Want To Add Free Conference Caling For Platinum
              FC used by FC
            </td>
          </tr>
          <tr>
            <td>11105</td>
            <td>Acc Mod For VAS</td>
            <td>Add Free For Platinum FC</td>
            <td>
              When The Customer Want To Add Free Clip Plus For Platinum FC used
              by FC
            </td>
          </tr>
          <tr>
            <td>11106</td>
            <td>Acc Mod For VAS</td>
            <td>Add Group</td>
            <td>when the customer want to Add Group Kids Unlimited</td>
          </tr>
          <tr>
            <td>11106</td>
            <td>Acc Mod For VAS</td>
            <td>Add Group</td>
            <td>when the customer want to Add GroupThe Group</td>
          </tr>
          <tr>
            <td>11107</td>
            <td>Acc Mod For VAS</td>
            <td>Add list</td>
            <td>when the customer want to Add list Ahsan Nas</td>
          </tr>
          <tr>
            <td>11108</td>
            <td>Acc Mod For VAS</td>
            <td>Add member</td>
            <td>when the customer want to Add memberAhsan Nas</td>
          </tr>
          <tr>
            <td>11108</td>
            <td>Acc Mod For VAS</td>
            <td>Add Member</td>
            <td>when the customer want to Add MemberKids Unlimited</td>
          </tr>
          <tr>
            <td>11108</td>
            <td>Acc Mod For VAS</td>
            <td>Add Member</td>
            <td>when the customer want to Add MemberThe Group</td>
          </tr>
          <tr>
            <td>11167</td>
            <td>Acc Mod For VAS</td>
            <td>Track</td>
            <td>
              SR in case the customer requests to track his/her order through
              110
            </td>
          </tr>
          <tr>
            <td>11166</td>
            <td>Acc Mod For VAS</td>
            <td>Purchase</td>
            <td>
              SR in case the customer requests to Order his/her through 110
            </td>
          </tr>
          <tr>
            <td>11193</td>
            <td>Acc Mod For VAS</td>
            <td>Service Announcement</td>
            <td>
              When customer requesting to add / delete Block for Service
              announcment
            </td>
          </tr>
          <tr>
            <td>11165</td>
            <td>Acc Mod For VAS</td>
            <td>Cancel</td>
            <td>
              SR in case the customer requests to Cancel his/her through 110
            </td>
          </tr>
          <tr>
            <td>11110</td>
            <td>Acc Mod For VAS</td>
            <td>Add Seasonal</td>
            <td>when the customer want to Add SeasonalInternational</td>
          </tr>
          <tr>
            <td>11110</td>
            <td>Acc Mod For VAS</td>
            <td>Add Seasonal</td>
            <td>
              when the customer want to Add Seasonal International And Roaming
            </td>
          </tr>
          <tr>
            <td>11110</td>
            <td>Acc Mod For VAS</td>
            <td>Add Seasonal</td>
            <td>when the customer want to Add Seasonal Roaming</td>
          </tr>
          <tr>
            <td>11112</td>
            <td>Acc Mod For VAS</td>
            <td>Add with deposit</td>
            <td>
              when the customer want to Add with deposit International used by
              Shop
            </td>
          </tr>
          <tr>
            <td>11113</td>
            <td>Acc Mod For VAS</td>
            <td>Bar</td>
            <td>when the customer want to Bar #100#</td>
          </tr>
          <tr>
            <td>11113</td>
            <td>Acc Mod For VAS</td>
            <td>Bar</td>
            <td>when the customer want to Bar E Top Up</td>
          </tr>
          <tr>
            <td>11115</td>
            <td>Acc Mod For VAS</td>
            <td>Change Language</td>
            <td>when the customer want to Change Language Call Tone</td>
          </tr>
          <tr>
            <td>11115</td>
            <td>Acc Mod For VAS</td>
            <td>Change Language</td>
            <td>when the customer want to Change Language #100#</td>
          </tr>
          <tr>
            <td>11116</td>
            <td>Acc Mod For VAS</td>
            <td>Change Package</td>
            <td>when the customer want to Change Package For I Email</td>
          </tr>
          <tr>
            <td>11117</td>
            <td>Acc Mod For VAS</td>
            <td>Change Password</td>
            <td>when the customer want to Change Password #100#</td>
          </tr>
          <tr>
            <td>11118</td>
            <td>Acc Mod For VAS</td>
            <td>Decrease</td>
            <td>
              When The Customer Want To Decrease Budget Master used by Corporate
            </td>
          </tr>
          <tr>
            <td>11169</td>
            <td>Acc Mod For VAS</td>
            <td>Renewal</td>
            <td>when the customer want to renew call tone</td>
          </tr>
          <tr>
            <td>11102</td>
            <td>Acc Mod For VAS</td>
            <td>Add</td>
            <td></td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to delete call tone</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>In case of deleting the tariff lock</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td></td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>
              to be used in case customer failed to delete VM service through
              IVR
            </td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to delete Second Line</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to delete SMS Bucket Star Control</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>
              when customer request to delete Black list or white list number
              from hisher service
            </td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to delete block</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>
              CSR should inform customer that his/ her request will be
              implemented within 1 hour and s/he will be notified by SMS
            </td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to delete Mobile Adv</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Clip Plus</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Clip Plus 2</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Status</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Conference Caling</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Data</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Fax and Data</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Fax Services</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Free Number</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Free Number</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete International</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete International And Roaming</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Link Dot Net</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Roaming</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete SMS Bill Advice</td>
          </tr>
          <tr>
            <td>11119</td>
            <td>Acc Mod For VAS</td>
            <td>Delete</td>
            <td>when the customer want to Delete Call Barring</td>
          </tr>
          <tr>
            <td>11121</td>
            <td>Acc Mod For VAS</td>
            <td>Delete Free</td>
            <td>when the customer want to Delete Free Itemized bill</td>
          </tr>
          <tr>
            <td>11122</td>
            <td>Acc Mod For VAS</td>
            <td>Delete Group</td>
            <td>when the customer want to Delete Group Kids Unlimited</td>
          </tr>
          <tr>
            <td>11122</td>
            <td>Acc Mod For VAS</td>
            <td>Delete Group</td>
            <td>when the customer want to Delete GroupThe Group</td>
          </tr>
          <tr>
            <td>11123</td>
            <td>Acc Mod For VAS</td>
            <td>Delete List</td>
            <td>when the customer want to Delete List Ahsan Nas</td>
          </tr>
          <tr>
            <td>11124</td>
            <td>Acc Mod For VAS</td>
            <td>Delete Member</td>
            <td>when the customer want to Delete Member Ahsan Nas</td>
          </tr>
          <tr>
            <td>11124</td>
            <td>Acc Mod For VAS</td>
            <td>Delete Member</td>
            <td>when the customer want to Delete Member Kids Unlimited</td>
          </tr>
          <tr>
            <td>11124</td>
            <td>Acc Mod For VAS</td>
            <td>Delete Member</td>
            <td>when the customer want to Delete Member The Group</td>
          </tr>
          <tr>
            <td>11126</td>
            <td>Acc Mod For VAS</td>
            <td>Increase</td>
            <td>
              When The Customer Want To Increase Budget Master used by Corporate
            </td>
          </tr>
          <tr>
            <td>11128</td>
            <td>Acc Mod For VAS</td>
            <td>Modify</td>
            <td>
              when customer request to modify Black list or white list number
              from hisher service
            </td>
          </tr>
          <tr>
            <td>11128</td>
            <td>Acc Mod For VAS</td>
            <td>Modify</td>
            <td>when the customer want to Modify Ahsan Nas</td>
          </tr>
          <tr>
            <td>11128</td>
            <td>Acc Mod For VAS</td>
            <td>Modify</td>
            <td>
              to be used of action of stopping notifications will be done
              through CS
            </td>
          </tr>
          <tr>
            <td>11128</td>
            <td>Acc Mod For VAS</td>
            <td>Modify</td>
            <td>In case a change is needed in the tariff lock parameters</td>
          </tr>
          <tr>
            <td>11128</td>
            <td>Acc Mod For VAS</td>
            <td>Modify</td>
            <td></td>
          </tr>
          <tr>
            <td>11128</td>
            <td>Acc Mod For VAS</td>
            <td>Modify</td>
            <td>when the customer want to Modify Free Number</td>
          </tr>
          <tr>
            <td>11129</td>
            <td>Acc Mod For VAS</td>
            <td>Release</td>
            <td>when the customer want to Release Voulantary Suspension</td>
          </tr>
          <tr>
            <td>11130</td>
            <td>Acc Mod For VAS</td>
            <td>Send Free</td>
            <td>When The Customer Want To Send Free Twin Line used by FC</td>
          </tr>
          <tr>
            <td>11131</td>
            <td>Acc Mod For VAS</td>
            <td>Send With Fees</td>
            <td>
              When The Customer Want To Send Twin Line With Fees used by FC
            </td>
          </tr>
          <tr>
            <td>11132</td>
            <td>Acc Mod For VAS</td>
            <td>suspend</td>
            <td>when the customer want to suspend Voulantary Suspension</td>
          </tr>
          <tr>
            <td>11133</td>
            <td>Acc Mod For VAS</td>
            <td>Suspend for Termination</td>
            <td>
              used by CCRs when customer requests to terminate his/ her line
            </td>
          </tr>
          <tr>
            <td>11134</td>
            <td>Acc Mod For VAS</td>
            <td>Un Bar</td>
            <td>when the customer want to Un Bar E Top Up</td>
          </tr>
          <tr>
            <td>11134</td>
            <td>Acc Mod For VAS</td>
            <td>Un Bar</td>
            <td>when the customer want to Un Bar #100#</td>
          </tr>
          <tr>
            <td>11135</td>
            <td>Acc Mod For VAS</td>
            <td>Add Opened</td>
            <td>When The Customer Want To Add Opened CUG used by Corporate</td>
          </tr>
          <tr>
            <td>11136</td>
            <td>Acc Mod For VAS</td>
            <td>Add Closed</td>
            <td>When The Customer Want To Add Closed CUG used by Corporate</td>
          </tr>
          <tr>
            <td>11137</td>
            <td>Acc Mod For VAS</td>
            <td>Migrate</td>
            <td>When The Customer Want To Migrate To Bulk Fee</td>
          </tr>
          <tr>
            <td>11138</td>
            <td>Acc Mod For VAS</td>
            <td>Change Data</td>
            <td>
              When The Customer Want To Change Data Of U- Cotrol used by
              Corporate
            </td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11152</td>
            <td>Acc Mod For VAS</td>
            <td>Release For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11153</td>
            <td>Acc Mod For VAS</td>
            <td>Increase For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11154</td>
            <td>Acc Mod For VAS</td>
            <td>Decrease For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11155</td>
            <td>Acc Mod For VAS</td>
            <td>Suspend For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11150</td>
            <td>Acc Mod For VAS</td>
            <td>Add For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>11151</td>
            <td>Acc Mod For VAS</td>
            <td>Delete For Less Than 10 Dials</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>71010</td>
            <td>POS Acc Mod for Applications</td>
            <td>Send STK PIN</td>
            <td></td>
          </tr>
          <tr>
            <td>11111</td>
            <td>Acc Mod For VAS</td>
            <td>Add Via EAI</td>
            <td>
              Postpaid/Prepaid/Star Control customers added the call tone
              service and it was activated on tool but not active or not found
              on CX
            </td>
          </tr>
          <tr>
            <td>12303</td>
            <td>Acc Mod For Products</td>
            <td>Handsets Reservation via MCC</td>
            <td>in case of handset reservations requests received</td>
          </tr>
          <tr>
            <td>12302</td>
            <td>Acc Mod For Products</td>
            <td>Add Free Minutes Through EAI</td>
            <td>used by Corporate</td>
          </tr>
          <tr>
            <td>12304</td>
            <td>Acc Mod For Products</td>
            <td>Handsets Network Unlock</td>
            <td>when customer request Handsets Network Unlock</td>
          </tr>
          <tr>
            <td>12305</td>
            <td>Acc Mod For Products</td>
            <td>Change Limit</td>
            <td>In case customer is requesting changing limit.</td>
          </tr>
          <tr>
            <td>12301</td>
            <td>Acc Mod For Products</td>
            <td>Add</td>
            <td>when customer want to add Validity</td>
          </tr>
          <tr>
            <td>12301</td>
            <td>Acc Mod For Products</td>
            <td>Add</td>
            <td>when customer want to add Validity</td>
          </tr>
          <tr>
            <td>12301</td>
            <td>Acc Mod For Products</td>
            <td>Add</td>
            <td>when customer want to add Validity</td>
          </tr>
          <tr>
            <td>12221</td>
            <td>Acc Mod For Products</td>
            <td>Purchase</td>
            <td>
              SR will be used only by FC agents in case of order submission
            </td>
          </tr>
          <tr>
            <td>10124</td>
            <td>Acc Mod For Billing</td>
            <td>Reinstate Line</td>
            <td></td>
          </tr>
          <tr>
            <td>10501</td>
            <td>Acc Mod For Group Share</td>
            <td>Activate</td>
            <td></td>
          </tr>
          <tr>
            <td>10503</td>
            <td>Acc Mod For Group Share</td>
            <td>Activate Free</td>
            <td></td>
          </tr>
          <tr>
            <td>10712</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid Data To</td>
            <td></td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td>In case of Migration from Prepaid to Star 50 - limit</td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td>In case of Migration from Prepaid to Kalam EL Net Monthly</td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td>In case of Migration from Prepaid to Control free profiles</td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td></td>
          </tr>
          <tr>
            <td>10707</td>
            <td>Acc Mod For Migration</td>
            <td>From Call And Control To</td>
            <td></td>
          </tr>
          <tr>
            <td>10709</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Call And Control To</td>
            <td></td>
          </tr>
          <tr>
            <td>10705</td>
            <td>Acc Mod For Migration</td>
            <td>From Primo To</td>
            <td></td>
          </tr>
          <tr>
            <td>10202</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Change From Star Max To</td>
            <td></td>
          </tr>
          <tr>
            <td>10203</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Smart Phone To</td>
            <td></td>
          </tr>
          <tr>
            <td>10212</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Star Online To</td>
            <td></td>
          </tr>
          <tr>
            <td>10204</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Global To</td>
            <td></td>
          </tr>
          <tr>
            <td>10217</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Demo Line To</td>
            <td></td>
          </tr>
          <tr>
            <td>10216</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Star Etkalem</td>
            <td></td>
          </tr>
          <tr>
            <td>10216</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Star Etkalem</td>
            <td></td>
          </tr>
          <tr>
            <td>10216</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Star Etkalem</td>
            <td></td>
          </tr>
          <tr>
            <td>10216</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Star Etkalem</td>
            <td></td>
          </tr>
          <tr>
            <td>10708</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Standard To</td>
            <td></td>
          </tr>
          <tr>
            <td>10708</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Standard To</td>
            <td>Migration from Corporate to Star 50-Limit</td>
          </tr>
          <tr>
            <td>10709</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Call And Control To</td>
            <td>
              Migration from Corporate call &amp; control to Star 50-Limit
            </td>
          </tr>
          <tr>
            <td>10124</td>
            <td>Acc Mod For Billing</td>
            <td>Reinstate Line</td>
            <td></td>
          </tr>
          <tr>
            <td>10503</td>
            <td>Acc Mod For Group Share</td>
            <td>Activate Free</td>
            <td></td>
          </tr>
          <tr>
            <td>10501</td>
            <td>Acc Mod For Group Share</td>
            <td>Activate</td>
            <td></td>
          </tr>
          <tr>
            <td>10707</td>
            <td>Acc Mod For Migration</td>
            <td>From Call And Control To</td>
            <td></td>
          </tr>
          <tr>
            <td>10704</td>
            <td>Acc Mod For Migration</td>
            <td>From Prepaid To</td>
            <td></td>
          </tr>
          <tr>
            <td>10706</td>
            <td>Acc Mod For Migration</td>
            <td>From Star To</td>
            <td></td>
          </tr>
          <tr>
            <td>10709</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Call And Control To</td>
            <td></td>
          </tr>
          <tr>
            <td>10708</td>
            <td>Acc Mod For Migration</td>
            <td>From Corp Standard To</td>
            <td></td>
          </tr>
          <tr>
            <td>10223</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>From Star Control 75 Max</td>
            <td>
              &quot;: In case the customer requested to migrate hisher Star
              control 75 Max line to any other star control tariff this SR to be
              used only in case the customer will not terminate hisher data line
            </td>
          </tr>
          <tr>
            <td>10226</td>
            <td>Acc Mod For Changing Tariff</td>
            <td>Limit Change</td>
            <td>
              In case of increasing or decreasing the limit of Star 50 - limit
              tariff
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              for Customers requesting to add extensions 3GB&amp;5GB Corporate
              Segment
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>Account modification for Addition</td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              to be used in case any customer requests to add MB transfer;
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              for Customers requesting to add extensions for their Internet
              Package
            </td>
          </tr>
          <tr>
            <td>10301</td>
            <td>Acc Mod For Data Services</td>
            <td>Add</td>
            <td>
              To be used when customer request stop the internet package and
              agent select un-subscribe customer deletion after data cycle from
              an internet Package
            </td>
          </tr>
          <tr>
            <td>10322</td>
            <td>Acc Mod For Data Services</td>
            <td>Deactivate</td>
            <td></td>
          </tr>
          <tr>
            <td>10326</td>
            <td>Acc Mod For Data Services</td>
            <td>Add Renewable Extension</td>
            <td></td>
          </tr>
          <tr>
            <td>10305</td>
            <td>Acc Mod For Data Services</td>
            <td>Migrate</td>
            <td></td>
          </tr>
          <tr>
            <td>10901</td>
            <td>Acc Mod For Offers</td>
            <td>Add</td>
            <td>
              SR will be created automatically upon successful subscription
            </td>
          </tr>
          <tr>
            <td>10904</td>
            <td>Acc Mod For Offers</td>
            <td>Delete</td>
            <td>
              In case customer requested to deactivate “Double internet package
              offer to be able to subscribe to another offer (in case s/he
              cannot subscribe to both offers at the same time), and offer will
              be deleted within 24 hours
            </td>
          </tr>
          <tr>
            <td>10748</td>
            <td>Acc Mod For Migration</td>
            <td>From Panther To</td>
            <td>customers migrating from panther to prepaid</td>
          </tr>
          <tr>
            <td>10747</td>
            <td>Acc Mod For Migration</td>
            <td>From Dolphin To</td>
            <td>customers migrating from Dolphin to prepaid</td>
          </tr>
        </tbody>
      </table>`,
  TroubleShooting: `<h1 class="text-center text-white font-bold py-4 text-4xl">Trouble Shooting
        </h1>
        <ul
          class="text-3xl text-center py-5 flex justify-around grid grid-cols-3 grid-flow-row gap-x-14 gap-y-10"
        >
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/Data%20Team/Troubleshooting/Pages/default.aspx"
              target="_blank"
              >Data</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="http://orangepedia/Products/Services/Complains/Pages/Block%20Service%20Complaints/Block%20Service%20Complaints.aspx"
              target="_blank"
              >Block</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="http://orangepedia/Products/Services/Pages/Internet-Packages--IN-WebCC.aspx#guidlines"
              target="_blank"
              >Chunck Quota</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="http://orangepedia/Products/Services/Pages/Premier-Enter.aspx#complain"
              target="_blank"
              >Entertainment Vas</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="http://orangepedia/Products/Pages/Home-Wireless-Complains-Handling.aspx"
              target="_blank"
              >Home Wireless</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="http://orangepedia/Products/Services/Complains/Pages/MCA%20Repricing%20for%20consumer%20customers%20trouble%20shooting/MCA-Repricing-for-consumer-customers-complains.aspx"
              target="_blank"
              >MCA</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/CS%20Network%20Complaint%20Handling%20Team/Troubleshooting%20Guide/Pages/default.aspx"
              target="_blank"
              >Network</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="http://orangepedia/Products/Documents/Sharing%20Option%20Troubleshooting.pptx"
              target="_blank"
              >Sharing Option</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/SIM%20Card%20troubleshooting/Pages/default.aspx"
              target="_blank"
              >SIM TRB</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Pages/default.aspx"
              target="_blank"
              >SMS</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="http://orangepedia/Products/Services/Complains/Pages/USSD%20Complaints/1--When-the-customer-tries-to-use-the-service,-and-there-is-a-message-informing-him-that-the-service-is-not-available-&-or-.aspx"
              target="_blank"
              >Ussd</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="assest/Mails/OTP Messages Troubleshooting.msg"
              >OTP Messages</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="assest/Mails/RE Roaming Complains New Handling.msg"
              >Roaming Apn</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="assest/Mails/Roaming Troublehsooting guide.pptx"
              >Roaming TRB</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="assest/Mails/Devices Technical Guide.pptx"
              >Device Technical</a
            >
          </li>
        </ul>`,
  ManualActivties: ` <h1 class="text-center text-white font-bold py-4 text-4xl">Manual Activties
      </h1>
      <table class="text-center my-2 grid-cols-2">
        <thead>
          <tr class="rounded-t">
            <th>Team</th>
            <th>Manual Activties</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FC TL</td>
            <td>FC TL Manual Template 30301</td>
          </tr>
          <tr>
            <td>110 PostPaid TL</td>
            <td>Postpaid CC 110 TL Team 3 WH</td>
          </tr>
          <tr>
            <td>110 PrePaid Tl</td>
            <td>C110 Hybrid & Prepaid TL 3WHs</td>
          </tr>
          <tr>
            <td>FC Assist</td>
            <td>Per FC Call Backs</td>
          </tr>
          <tr>
            <td>110 Post Assist</td>
            <td>CS 110 Postpaid Support</td>
          </tr>
          <tr>
            <td>110 Pre Assist</td>
            <td>Raya 110 Assist team 24 WH Manual</td>
          </tr>

          <tr>
            <td>FC Back Office</td>
            <td>FC BO Group Share</td>
          </tr>
          <tr>
            <td>CHT Post</td>
            <td>
              CHT Postpaid C&amp;C_Post CHT // Incident Follow Up 5 WD CHT
              Postpaid
            </td>
          </tr>
          <tr>
            <td>CHT H4G</td>
            <td>Incident Follow Up 5 WD Home 4G CHT Personal</td>
          </tr>
          <tr>
            <td>Credit Team</td>
            <td>Consumer Credit Manual 12</td>
          </tr>
          <tr>
            <td>DATA Team</td>
            <td>DWS</td>
          </tr>
          <tr>
            <td>Save Team</td>
            <td>Personal Save Team Manual 12</td>
          </tr>
          <tr>
            <td>Activation</td>
            <td>Activation Consumer Follow Up</td>
          </tr>
        </tbody>
      </table>`,
  IntraGuide: `<h1 class="text-center text-white font-bold py-4 text-4xl">Intra Guide
        </h1>
        <ul
          class="text-lg text-center py-5 grid grid-cols-3 grid-flow-row gap-x-8 gap-y-10"
        >
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Departmental%20Guide/1st%20Class%20Guide/Pages/default.aspx"
              target="_blank"
              >1st Class Guide</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/Postpaid%20Team%20Links/Postpaid%20assist%20team%20work%20instruction/Pages/default.aspx"
              target="_blank"
              >Angry Customer</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Orange%20-%20Star%20Postpaid/Bill%20Disputes%20and%20Call%20Details/Pages/default.aspx"
              target="_blank"
              >Bill Disputes and Call Details</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Handling%20Rules/Bill%20Official%20Document%20Requests%20for%20Post-paid%20Customers/Pages/default.aspx"
              target="_blank"
              >Bill Official
            </a>
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Departmental%20Guide/Business%20250%20Guide/Pages/default.aspx"
              target="_blank"
              >Business 250 Guide</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Handling%20Rules/CEO%20Escalation%20Handling%20Angry%20Customers%20for%20Consumer%20segments/Pages/default.aspx"
              target="_blank"
              >CEO Escalation</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Orange%20-%20Star%20Postpaid/Pages/default.aspx"
              target="_blank"
              >Change Owner Ship</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Mobinil%20ALO/IVRs%20Handling/Checking%20PUK%20Code/Pages/default.aspx"
              target="_blank"
              >Checking PUK Code</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Departmental%20Guide/Credit%20guide/Pages/default.aspx"
              target="_blank"
              >Credit Guide</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Orange%20-%20Star%20Postpaid/Deposit%20refund/Pages/default.aspx"
              target="_blank"
              >Deposit refund</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Handling%20Rules/Foreign%20Customers/Pages/default.aspx"
              target="_blank"
              >Foreign Customers</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="/teamsites/customerService/functions/Documents/Customer Service Harassment Handling process.docx"
              target="_blank"
              >Harassment Handling</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/Prepaid%20Team%20Links/IMI%20Training%20Team/Pages/default.aspx"
              target="_blank"
              >IMI Training Team</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Orange%20-%20Star%20Postpaid/Pages/default.aspx"
              target="_blank"
              >Legal Guide</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Pages/default.aspx"
              target="_blank"
              >Revamp Migration</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Scripts/Pages/default.aspx"
              target="_blank"
              >Scripts</a
            >
          </li>
          <li class="rounded flex items-center justify-center bg-white">
            <a
              class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
              href="https://intranet/teamsites/customerService/functions/110%20Agents/110%20Call%20Guide/Handling%20Rules/Handling%20Ministry%20Of%20Suppliers%20Service%20Requests/Pages/default.aspx"
              target="_blank"
              >Suppliers Service Requests</a
            >
          </li>
        </ul>`,
  QMails: `<h1 class="text-center text-white font-bold py-4 text-4xl">Q Mails</h1>
      <ul
        class="text-3xl text-center py-5 flex justify-around grid grid-cols-3 grid-flow-row gap-x-6 gap-y-5"
      >
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Application Down Time for Siebel - Low Performance.msg"
            >Application Down Time</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Q Reason .msg"
            >Q Reason</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Roaming Complaint.msg"
            >Core roaming</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Siebel - Invoices down.msg"
            class="bg-danger"
            >Invoices Down</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Collect Dials - Data Connection Problem .msg"
            >Data Connection</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Collect Dials -USSD Problem.msg"
            >Ussd Problem</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Charging  Problem .msg"
            >Charging Problem</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Collect Dials - Bucket Not Found.msg"
            >Bucket Not Found</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Invoices Problem .msg"
            >Invoices Problem</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Block Service issue.msg"
            >Block Service</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Collect User- Orangepedia Low Performance.msg"
            >Pedia Low Performance</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Migration to Premier without request .msg"
            >Migration to Premier</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/SD Auto Release Problem.msg"
            >SD Auto Release</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Siebel - Invoices down.msg"
            class="bg-danger"
            >Invoices Down</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Collect Dials- Mondia Media Error.msg"
            >Mondia Media Error</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Collect Users - Siebel Automation Problem .msg"
            >Siebel Automation Problem</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/ Migration to Eagle and Premier.msg"
            >Migration Mail</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Collect Dials - Can't Renew through My Orange Application.msg"
            >Can't Renew My Orange</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Handover Sheet.xlsx"
            >HandOver Sheet</a
          >
        </li>
        <li class="rounded flex items-center justify-center bg-white">
          <a
            class="w-full p-2 hover:bg-black hover:text-white hover:rounded font-bold"
            href="assest/Mails/Midnight Handover for 02102024.msg"
            >Midnight HandOver</a
          >
        </li>
      </ul>`,
  Bulk: `  <h1 class="flex flex-col justify-center items-center text-white text-4xl py-4 font-bold">Bulk
      </h1>
      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>User</th>
            <th>Pass</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                target="_blank"
                href="http://10.56.230.56:8080/cs/home.html#statusmodification"
                >Call Tone CRBT</a
              >
            </td>
            <td>IMI00104</td>
            <td>qwA_324</td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://customercare.mondia.com/login"
                >Mondia</a
              >
            </td>
            <td>orangecustomercare@orange.com</td>
            <td>P@$$w0rd</td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="https://self-manage.tpay.me/simpleLogin.aspx"
                >T-pay</a
              >
            </td>
            <td>Mobinilcustmercare@Mobinil.com</td>
            <td>Or@ngeCare</td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="https://gdapps.info/OrangeAlerts/LoginPage.aspx"
                >Go Digital</a
              >
            </td>
            <td>OrangeCS</td>
            <td>oR@ng_Gd4663_#$</td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://secure.gameloft.com/supporttool/"
                >Game Loft</a
              >
            </td>
            <td>mobinilEgypt</td>
            <td>spTgNbL2</td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="https://customercare.contactdve.com/Clientsearch?"
                >Hareef Ghona Digital</a
              >
            </td>
            <td>Orange_EG_Cuscare</td>
            <td>OrAnEgcUsCRs52*</td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="https://icebergportal.dvmproduct.com/user/view?id=1636"
                >Hareef Ghona Ice</a
              >
            </td>
            <td>5$Nf@79M</td>
            <td>rhannah</td>
          </tr>
          <tr>
            <td>
              <a
                target="_blank"
                href="http://orange.alerting.services/OrangeCC/default.aspx?CI=Subscribtions.ascx"
                >Hareef Gaming -Kora - Mawaheb</a
              >
            </td>
            <td>Orangecc</td>
            <td>tf7hy</td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="https://10.56.230.92:8081/">Status</a>
            </td>
            <td>mzidan</td>
            <td>Zidan@9632</td>
          </tr>
          <tr>
            <td>
              <a target="_blank" href="http://umvas.vlserv.com/DOBManagement/WebTool/CustomerCare/SDPCustomerCareTool/index">Victory-link</a>
            </td>
            <td>OrangeCustomerCareUser</td>
            <td>QpEOYYn4s8</td>
          </tr>
        </tbody>
      </table>
    `,
  TipsAndTricks: `<h1
        class="flex flex-col justify-center items-center text-white text-4xl py-10 font-bold"
      >Tips And Tricks</h1>
      <table class="text-center my-2 grid-cols-2">
        <thead>
          <tr class="rounded-t">
            <th>Short Description "Memo"</th>
            <th>What It Do</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CC CHARGE</td>
            <td>Explain The Device Which Cs Install It And Installment Amount & Duration</td>
          </tr>
          <tr>
            <td>roaming_welcome_out	</td>
            <td>Explain The Country Which Cs At it Outside + opreator Which He Latched on it</td>
          </tr>
          <tr>
            <td>roaming_welcome_in	</td>
            <td>Explain That Cs Returned To Egypt</td>
          </tr>
        </tbody>
      </table>`,
};

//  get li a innerHTML
let menu = document.querySelector("nav ul").children;
// select hidden div
let divh = document.querySelector(".hidden");

function inl() {
  let navi = document.getElementById("list");
  let hasac = document.getElementsByClassName("active");
  let result = "";
  let newm = document.createElement("main");

  navi.onclick = (e) => {
    let result = e.target;
    let getfromains = result.innerHTML.replaceAll(" ", "");
    for (let i = 0; i < menu.length; i++) {
      if (result === navi) {
        break;
      } else {
        if (
          divh.previousElementSibling.firstElementChild.innerHTML.trim() !==
          result.innerHTML
        ) {
          document
            .querySelector("header")
            .nextElementSibling.nextElementSibling.remove();
          newm.innerHTML = mains[getfromains];
          divh.before(newm);
          newm.classList.add(
            "flex",
            "flex-col",
            "justify-center",
            "items-center"
          );
          hasac[0].classList.remove("active");
          result.classList.add("active");
          if (result.innerHTML === "Siebel Guide") {
            Swal.fire({
              title: "How To Search ?",
              text: "To Use Search Func First Letter Of Each Word Should Be Captial \n You Can Search By SR Number",
              icon: "info",
              timer: 1500,
              showConfirmButton: false,
            });
            let tables = document.getElementsByTagName("table");
            let input = document.getElementById("myInput");
            let SieOpt = document.querySelectorAll("#SieList");
            input.addEventListener("input", function () {
              var rows = tables[SearchWord].getElementsByTagName("tr");

              for (var i = 0; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName("td");
                for (var j = 0; j < cells.length; j++) {
                  if (cells[j].innerHTML.includes(input.value)) {
                    rows[i].style.display = "table-row";
                    break;
                  } else {
                    rows[i].style.display = "none";
                  }
                }
              }
            });
            SieOpt.forEach((ea) => {
              ea.addEventListener("click", function (e) {
                if (e.target.innerHTML.trim() === "Fault") {
                  const fault = document.getElementById("fault");
                  SearchWord = 0;
                  for (let i = 0; i < tables.length; i++) {
                    if (tables[i] == fault) {
                      tables[i].style.display = "table";
                      input.style.backgroundColor = "#bb2d3b";
                      input.style.color = "white";
                    } else {
                      tables[i].style.display = "none";
                    }
                  }
                } else if (e.target.innerHTML.trim() === "Request") {
                  const request = document.getElementById("request");
                  SearchWord = 1;
                  for (let i = 0; i < tables.length; i++) {
                    if (tables[i] == request) {
                      tables[i].style.display = "table";
                      input.style.backgroundColor = "#ffc107";
                      input.style.color = "#000";
                    } else {
                      tables[i].style.display = "none";
                    }
                  }
                } else if (e.target.innerHTML.trim() === "Acc") {
                  const acc = document.getElementById("acc");
                  SearchWord = 2;
                  for (let i = 0; i < tables.length; i++) {
                    if (tables[i] == acc) {
                      tables[i].style.display = "table";
                      input.style.backgroundColor = "#198754";
                      input.style.color = "white";
                    } else {
                      tables[i].style.display = "none";
                    }
                  }
                }
              });
            });
          }
          if (result.innerHTML === "Home") {
            let inpv = document.getElementById("AfTaxes");
            inpv.addEventListener("input", function () {
              inpv.nextElementSibling.innerHTML =
                (inpv.value * 0.7).toFixed(2) + " LE";
            });
            let inpv2 = document.getElementById("BefTaxes");
            inpv2.addEventListener("input", function () {
              inpv2.nextElementSibling.innerHTML =
                (inpv2.value / 0.7).toFixed(2) + " LE";
            });
            let Start = document.getElementById("Start");
            let End = document.getElementById("End");
            let Total = document.getElementById("TotalDays");
            End.addEventListener("input", function () {
              let date1 = new Date(Start.value);
              let date2 = new Date(End.value);
              let Months = document.getElementById("TotalMonths");
              let AMountRes = Months.nextElementSibling;
              if (!isNaN(date1) && !isNaN(date2)) {
                let difference = date2 - date1;
                let DifDays = difference / 1000 / 60 / 60 / 24 + 1;
                Total.innerHTML = `Total Days = ${DifDays}`;
                Months.innerHTML = `${(DifDays / 30).toFixed(2)}`;
                AMountRes.innerHTML = `${(Months.innerHTML * 36.93).toFixed(
                  2
                )}`;
              } else {
                Swal.fire({
                  title: "Error",
                  text: "One or both dates are invalid.",
                  icon: "error",
                  timer: 1500,
                  showConfirmButton: false,
                });
              }
            });
            let PostVat = document.getElementById("PostVat");
            let Amount8 = PostVat.parentElement.nextElementSibling;
            let Amount14 = Amount8.nextElementSibling;
            let TotalP = Amount14.nextElementSibling;
            let NewD = TotalP.nextElementSibling;
            PostVat.addEventListener("input", function () {
              if (PostVat.value === "") {
                Amount8.innerHTML = "0";
                Amount14.innerHTML = "0";
                TotalP.innerHTML = "0";
                NewD.innerHTML = "0";
              } else {
                Amount8.innerHTML = (PostVat.value * 0.08).toFixed(2);
                Amount14.innerHTML = (
                  (parseFloat(Amount8.innerHTML) + parseFloat(PostVat.value)) *
                  0.14
                ).toFixed(2);
                TotalP.innerHTML = (
                  parseFloat(PostVat.value) +
                  parseFloat(Amount8.innerHTML) +
                  parseFloat(Amount14.innerHTML)
                ).toFixed(2);

                NewD.innerHTML = (parseFloat(TotalP.innerHTML) + 12.31).toFixed(
                  2
                );
              }
            });
          }
        } else if (result === "Orange Simulator") {
          newm.innerHTML = mains["Home"];
          divh.before(newm);
          newm.classList.add(
            "flex",
            "flex-col",
            "justify-center",
            "items-center"
          );
        }
      }
    }
  };
}

let inpv = document.getElementById("AfTaxes");
inpv.addEventListener("input", function () {
  inpv.nextElementSibling.innerHTML = (inpv.value * 0.7).toFixed(2) + " LE";
});
let inpv2 = document.getElementById("BefTaxes");
inpv2.addEventListener("input", function () {
  inpv2.nextElementSibling.innerHTML = (inpv2.value / 0.7).toFixed(2) + " LE";
});

let Start = document.getElementById("Start");
let End = document.getElementById("End");
let Total = document.getElementById("TotalDays");

End.addEventListener("input", function () {
  let date1 = new Date(Start.value);
  let date2 = new Date(End.value);
  let Months = document.getElementById("TotalMonths");
  let AMountRes = Months.nextElementSibling;
  if (!isNaN(date1) && !isNaN(date2)) {
    let difference = date2 - date1;
    let DifDays = difference / 1000 / 60 / 60 / 24 + 1;
    Total.innerHTML = `Total Days = ${DifDays}`;
    Months.innerHTML = `${(DifDays / 30).toFixed(2)}`;
    AMountRes.innerHTML = `${(Months.innerHTML * 36.93).toFixed(2)}`;
  } else {
    Swal.fire({
      title: "Error",
      text: "One or both dates are invalid.",
      icon: "error",
      timer: 1500,
      showConfirmButton: false,
    });
  }
});

let PostVat = document.getElementById("PostVat");
let Amount8 = PostVat.parentElement.nextElementSibling;
let Amount14 = Amount8.nextElementSibling;
let TotalP = Amount14.nextElementSibling;
let NewD = TotalP.nextElementSibling;
PostVat.addEventListener("input", function () {
  if (PostVat.value === "") {
    Amount8.innerHTML = "0";
    Amount14.innerHTML = "0";
    TotalP.innerHTML = "0";
    NewD.innerHTML = "0";
  } else {
    Amount8.innerHTML = (PostVat.value * 0.08).toFixed(2);
    Amount14.innerHTML = (
      (parseFloat(Amount8.innerHTML) + parseFloat(PostVat.value)) *
      0.14
    ).toFixed(2);
    TotalP.innerHTML = (
      parseFloat(PostVat.value) +
      parseFloat(Amount8.innerHTML) +
      parseFloat(Amount14.innerHTML)
    ).toFixed(2);

    NewD.innerHTML = (parseFloat(TotalP.innerHTML) + 12.31).toFixed(2);
  }
});
