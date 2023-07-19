"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5904],{87569:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return r},default:function(){return g}});var a=n(87462),o=n(45987),i=(n(15007),n(64983)),p=n(91515);const s=["components"],r={},u=(d="CodeBlock",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var d;const c={_frontmatter:r},l=p.Z;function g(e){let{components:t}=e,n=(0,o.Z)(e,s);return(0,i.mdx)(l,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"rest-apis"},"REST APIs"),(0,i.mdx)("p",null,"See our public API Reference for ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Accessibility-Auto-Tag"},"PDF Accessibility Auto-Tag API"),"."),(0,i.mdx)("h2",{id:"generate-tagged-pdf-with-version-17-along-with-an-xlsx-report-and-shift-the-headings-in-the-output-pdf-file"},"Generate tagged PDF with version 1.7 along with an XLSX report and shift the headings in the output PDF file"),(0,i.mdx)("p",null,"The sample below generate tagged PDF of version 1.7 along with an XLSX report and shift the headings in the output PDF file."),(0,i.mdx)("p",null,"Please refer the ",(0,i.mdx)("a",{parentName:"p",href:"../api-usage.md"},"API usage guide")," to understand how to use our APIs."),(0,i.mdx)(u,{slots:"heading, code",repeat:"3",languages:"Java, Python, REST API",mdxType:"CodeBlock"}),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// Get the samples from https://git.corp.adobe.com/dc/dc-cpf-sdk-java-samples/tree/beta\n// Run the sample:\n// mvn -f pom.xml exec:java -Dexec.mainClass=com.adobe.pdfservices.operation.samples.autotagpdf.AutotagPDFWithOptions \n\npublic class AutotagPDFWithOptions {\n\n    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(AutotagPDFWithOptions.class);\n\n    public static void main(String[] args) {\n\n        try {\n            // Initial setup, create credentials instance.\n            Credentials credentials = Credentials.serviceAccountCredentialsBuilder()\n                    .fromFile("pdfservices-api-credentials.json")\n                    .build();\n\n            //Create an ExecutionContext using credentials and create a new operation instance.\n            ExecutionContext executionContext = ExecutionContext.create(credentials);\n\n            AutotagPDFOperation autotagPDFOperation = AutotagPDFOperation.createNew();\n\n            // Provide an input FileRef for the operation\n            autotagPDFOperation.setInput(FileRef.createFromLocalFile("src/main/resources/autotagPdfInput.pdf"));\n\n            // Build AutotagPDF options and set them into the operation\n            AutotagPDFOptions autotagPDFOptions = AutotagPDFOptions.autotagPDFOptionsBuilder()\n                    .shiftHeadings()\n                    .generateReport()\n                    .build();\n            autotagPDFOperation.setOptions(autotagPDFOptions);\n\n            // Execute the operation\n            AutotagOutputFiles autotagOutputFiles = autotagPDFOperation.execute(executionContext);\n\n            // Save the output files at the specified location\n            autotagOutputFiles.saveTaggedPDF("output/AutotagPDFWithOptions-tagged.pdf");\n            autotagOutputFiles.saveReport("output/AutotagPDFWithOptions-report.xlsx");\n\n\n        } catch (ServiceApiException | IOException | ServiceUsageException e) {\n            System.out.println(e);\n        }\n    }\n}\n')),(0,i.mdx)("h4",{id:"python"},"Python"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"# Get the samples from https://git.corp.adobe.com/dc/dc-cpf-python-sdk-samples/tree/beta\n# Run the sample:\n# python src/autotagpdf/autotag_pdf_with_options.py\n\nlogging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO'))\n\ntry:\n    # get base path.\n    base_path = str(Path(__file__).parents[2])\n\n    # Initial setup, create credentials instance.\n    credentials = Credentials.service_account_credentials_builder() \\\n        .from_file(base_path + '/pdfservices-api-credentials.json') \\\n        .build()\n\n    # Create an ExecutionContext using credentials and create a new operation instance.\n    execution_context = ExecutionContext.create(credentials)\n    autotag_pdf_operation = AutotagPDFOperation.create_new()\n\n    # Set operation input from a source file.\n    input_file_path = 'autotagPdfInput.pdf'\n    source = FileRef.create_from_local_file(base_path + '/resources/' + input_file_path)\n    autotag_pdf_operation.set_input(source)\n\n    # Build AutotagPDF options and set them into the operation\n    autotag_pdf_options: AutotagPDFOptions = AutotagPDFOptions.builder()\\\n        .with_shift_headings()\\\n        .with_generate_report()\\\n        .build()\n    autotag_pdf_operation.set_options(autotag_pdf_options)\n\n    # Execute the operation.\n    autotag_output_files: AutotagPDFOutputFiles = autotag_pdf_operation.execute(execution_context)\n\n    input_file_name = Path(input_file_path).stem\n    base_output_path = base_path + '/output/AutotagPDFWithOptions/'\n\n    Path(base_output_path).mkdir(parents=True, exist_ok=True)\n    tagged_pdf_path = f'{base_output_path}{input_file_name}-tagged.pdf'\n    report_path = f'{base_output_path}{input_file_name}-report.xlsx'\n\n    # Save the result to the specified location.\n    autotag_output_files.save_pdf_file(tagged_pdf_path)\n    autotag_output_files.save_xls_file(report_path)\n\nexcept (ServiceApiException, ServiceUsageException, SdkException) as e:\n    logging.exception(f'Exception encountered while executing operation: {e}')\n")),(0,i.mdx)("h4",{id:"rest-api"},"REST API"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"// Please refer our REST API docs for more information \n// https://developer.adobe.com/document-services/docs/apis/#tag/PDF-Accessibility-Auto-Tag\n\ncurl --location --request POST 'https://pdf-services.adobe.io/operation/autotag' \\\n--header 'x-api-key: {{Placeholder for client_id}}' \\\n--header 'Content-Type: application/json' \\\n--header 'Authorization: Bearer {{Placeholder for token}}' \\\n--data-raw '{\n    \"assetID\": \"urn:aaid:AS:UE1:23c30ee0-2e4d-46d6-87f2-087832fca718\",\n    \"shiftHeadings\": true,\n    \"generateReport\": true\n}'\n")))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-3-2-0-pdf-accessibility-auto-tag-api-howtos-rest-md-b07a0462a263a90d0f06.js.map