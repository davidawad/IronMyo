using UnityEngine;  
using UnityEditor;  
using IronPython;  
using IronPython.Modules;  
using System.Text;  
// derive from EditorWindow for convenience, but this is just a fire-n-forget script  
public class ScriptExample : EditorWindow {  
	[MenuItem("Python/HelloWorld")]  
	public static void ScriptTest()  
	{  
		// create the engine  
		var ScriptEngine = IronPython.Hosting.Python.CreateEngine();  
		// and the scope (ie, the python namespace)  
		var ScriptScope = ScriptEngine.CreateScope();  
		// execute a string in the interpreter and grab the variable  
		string example = "output = 'hello world'";  
		var ScriptSource = ScriptEngine.CreateScriptSourceFromString(example);  
		ScriptSource.Execute(ScriptScope);  
		string came_from_script = ScriptScope.GetVariable<string>("output");  
		// Should be what we put into 'output' in the script.  
		Debug.Log(came_from_script);              
	}  
}  