//A brutally simple vertex shader that just mimics exactly what OpenGL's default
//fixed pipeline does

void main() {                
    gl_TexCoord[0] = gl_MultiTexCoord0;
    
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

}
